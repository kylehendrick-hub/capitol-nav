import { useRef, useCallback, useEffect } from 'react';
import { useMap } from '../context/MapContext';

export function useMapInteraction(containerRef: React.RefObject<HTMLDivElement | null>) {
  const { state, dispatch } = useMap();
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastPinchDist = useRef(0);

  const setTransform = useCallback(
    (scale: number, translateX: number, translateY: number) => {
      dispatch({
        type: 'SET_TRANSFORM',
        transform: {
          scale: Math.max(0.3, Math.min(4, scale)),
          translateX,
          translateY,
        },
      });
    },
    [dispatch]
  );

  // Mouse/touch handlers
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };
      setTransform(
        state.transform.scale,
        state.transform.translateX + dx,
        state.transform.translateY + dy
      );
    },
    [state.transform, setTransform]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const newScale = state.transform.scale * delta;
      const scaleChange = newScale / state.transform.scale;

      setTransform(
        newScale,
        mouseX - scaleChange * (mouseX - state.transform.translateX),
        mouseY - scaleChange * (mouseY - state.transform.translateY)
      );
    },
    [containerRef, state.transform, setTransform]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [containerRef, handleWheel]);

  // Touch pinch-to-zoom
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (lastPinchDist.current > 0) {
          const scale = dist / lastPinchDist.current;
          setTransform(
            state.transform.scale * scale,
            state.transform.translateX,
            state.transform.translateY
          );
        }
        lastPinchDist.current = dist;
      }
    },
    [state.transform, setTransform]
  );

  const handleTouchEnd = useCallback(() => {
    lastPinchDist.current = 0;
  }, []);

  return {
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleTouchMove,
    handleTouchEnd,
    transform: state.transform,
    resetView: () => dispatch({ type: 'RESET_VIEW' }),
  };
}
