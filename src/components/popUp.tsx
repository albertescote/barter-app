import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog"
import React from "react";

interface PopupProps {
  title: string;
  description: string;
  onClose: () => void;
}

const PopUp: React.FC<PopupProps> = ({ title, description, onClose }) =>{
  return (
    <Dialog defaultOpen>
      <DialogContent className="w-full max-w-md rounded-lg bg-[#f0f9ff] p-6 text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="mt-4 text-lg">
          {description}
        </DialogDescription>
        <DialogFooter className="mt-6">
          <button
              className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] hover:from-[#b4c6ff] hover:to-[#b4e6ff] text-white font-bold py-2 px-4 rounded-full transition"
            onClick={onClose}
          >
            Close
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
export default PopUp;
