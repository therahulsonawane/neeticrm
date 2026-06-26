"use client";

import React, { createContext, useContext, useState } from "react";
import { DemoModal } from "@/components/ui/DemoModal";

interface DemoModalContextType {
  isOpen: boolean;
  openDemoModal: () => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDemoModal = () => setIsOpen(true);
  const closeDemoModal = () => setIsOpen(false);

  return (
    <DemoModalContext.Provider value={{ isOpen, openDemoModal, closeDemoModal }}>
      {children}
      <DemoModal isOpen={isOpen} onClose={closeDemoModal} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}
