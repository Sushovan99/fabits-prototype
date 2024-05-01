import { createPortal } from "react-dom";
import Close from "@/assets/svgs/Close";
import AnimationBg from "@/assets/images/animation_bg.png";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FunctionComponent<Props> = ({ isOpen, onClose }) => {
    return isOpen
        ? createPortal(
              <div className="drawer">
                  <button
                      className="btn-drawer-close z-50"
                      type="button"
                      onClick={onClose}
                  >
                      <Close />
                  </button>

                  <div className="rounded-3xl w-full h-auto z-50">
                      <div className="w-full relative">
                          <img
                              src={AnimationBg}
                              alt="animation-bg"
                              className="w-full"
                          />
                      </div>
                  </div>

                  <div className="drawer-overlay"></div>
              </div>,
              document.getElementById("project1-body") || document.body
          )
        : null;
};

export default Drawer;
