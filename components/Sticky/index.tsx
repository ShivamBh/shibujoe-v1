import gsap from "gsap";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";

export function Sticky({
  children,
  wrapperClass,
  className,
  start = 0,
  end = 0,
  target,
  id = "sticky",
  enabled = true,
  pinType = "fixed",
}) {
  const pinSpacer = useRef();
  const trigger = useRef();
  const targetRef = useRef();

  useLayoutEffect(() => {
    if (!enabled || !pinSpacer.current || !trigger.current) return;

    gsap.set(trigger.current, { clearProps: "all" });
    const timeline = gsap.timeline({
      scrollTrigger: {
        id,
        pinType,
        pinSpacing: false,
        trigger: trigger.current,
        pinSpacer: pinSpacer.current,
        scrub: true,
        pin: true,
        start: `top top+=${parseFloat(start)}px`,
        end: () => {
          const targetRefRect = targetRef.current.getBoundingClientRect();
          const triggerRect = trigger.current.getBoundingClientRect();
          return `+=${
            targetRefRect.bottom - triggerRect.bottom + parseFloat(end)
          }`;
        },
        invalidateOnRefresh: true,
      },
    });
    return () => {
      timeline.kill();
    };
  }, [id, start, enabled, end, pinType]);

  useEffect(() => {
    if (target) {
      targetRef.current = document.querySelector(target);
    } else {
      targetRef.current = pinSpacer.current.parentNode;
    }
  }, [target]);

  return (
    <div
      ref={(node) => {
        pinSpacer.current = node;
      }}
      className={wrapperClass}
    >
      <div
        ref={(node) => {
          trigger.current = node;
        }}
        className={className}
      >
        {children}
      </div>
    </div>
  );
}
