import { useEffect, useRef } from "react";

export default function InfiniteScrollContainer({
  children,
  fetchNextPage,
  hasNextPage,
}) {
  const bottomPageIndicatorRef = useRef(null);

  useEffect(() => {
    const bottomPageIndicatorElement = bottomPageIndicatorRef.current;
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (bottomPageIndicatorElement)
      observer.observe(bottomPageIndicatorElement);

    return () => {
      if (bottomPageIndicatorElement)
        observer.unobserve(bottomPageIndicatorElement);
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      {children}
      <div ref={bottomPageIndicatorRef} className="h-12"></div>
    </>
  );
}
