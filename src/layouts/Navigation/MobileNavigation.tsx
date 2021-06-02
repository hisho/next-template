import React, { VFC, useContext, useEffect, useRef, useCallback } from 'react';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { NavigationContext } from '@src/store';
import { Fade } from '@material-ui/core';
import FocusTrap from 'focus-trap-react';
import styles from '@src/layouts/Navigation/mobileNavigation.module.css';

export const MobileNavigation: VFC = () => {
  const { state, dispatch } = useContext(NavigationContext);
  const navElement = useRef<HTMLElement | null>(null);

  const handleClose = useCallback(() => {
    dispatch({ type: 'update', payload: false });
  }, []);

  const keydownEvent = useCallback((event: KeyboardEvent) => {
    const isEscapeKey = event.code === 'Escape' || event.key === 'Escape';
    if (!isEscapeKey) return;
    handleClose();
  }, []);

  (() => {
    if (typeof window === 'undefined') return;
    if (!(navElement.current instanceof HTMLElement)) return;
    if (state.open) {
      document.documentElement.style.overflow = 'hidden';
      disableBodyScroll(navElement.current);
      window.addEventListener('keydown', keydownEvent, false);
    } else {
      document.documentElement.style.overflow = '';
      enableBodyScroll(navElement.current);
      window.removeEventListener('keydown', keydownEvent, false);
    }
  })();

  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = '';
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <>
      <Fade in={state.open} timeout={300}>
        <nav
          ref={navElement}
          className="fixed top-0 inset-x-0 overflow-y-auto z-40"
          id="Navigation"
          aria-hidden={!state.open}
        >
          <FocusTrap active={state.open}>
            <div>
              <div className="bg-primary-black text-white wrapper-px pt-11 pb-12">
                <a href="#">ダミー</a>
              </div>
              <div
                onClick={handleClose}
                className={`${styles.overlay}`}
                aria-hidden={!state.open}
              />
            </div>
          </FocusTrap>
        </nav>
      </Fade>
    </>
  );
};
