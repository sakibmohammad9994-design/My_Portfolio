import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SceneState, RoomId, Project, Certificate } from './types';
import { HOUSE_ROOMS } from './data/portfolioData';
import { AtmosphereCanvas } from './components/AtmosphereCanvas';
import { ArrivalScene } from './components/scenes/ArrivalScene';
import { DoorTransition } from './components/scenes/DoorTransition';
import { RoomContainer } from './components/RoomContainer';
import { NavigationHUD } from './components/NavigationHUD';
import { HouseMapModal } from './components/HouseMapModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AccessibleViewModal } from './components/AccessibleViewModal';
import { sound } from './utils/sound';

export function App() {
  const [scene, setScene] = useState<SceneState>('arrival');
  const [currentRoom, setCurrentRoom] = useState<RoomId>('living_room');
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isAccessibleViewOpen, setIsAccessibleViewOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [activeObjectDetails, setActiveObjectDetails] = useState<string | null>(null);

  // Keyboard navigation & Shortcuts for exploration
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Map toggle
      if (e.key === 'm' || e.key === 'M') {
        setIsMapOpen((prev) => !prev);
        sound.playClick();
      }
      // ESC closes modals
      if (e.key === 'Escape') {
        setIsMapOpen(false);
        setSelectedProject(null);
        setSelectedCertificate(null);
        setActiveObjectDetails(null);
      }
      // Quick jump with numbers 1 to 9 if inside house
      if (scene === 'house_explore') {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= HOUSE_ROOMS.length) {
          const targetRoom = HOUSE_ROOMS[num - 1];
          if (targetRoom) {
            setCurrentRoom(targetRoom.id);
            sound.playClick();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scene]);

  // Audio start on first interaction
  const ensureAudioInitialized = () => {
    sound.init();
  };

  const handleCompleteDoorTransition = () => {
    setScene('house_explore');
    setCurrentRoom('living_room');
  };

  const handleStartDoorTransition = () => {
    ensureAudioInitialized();
    sound.playClick();
    setScene('house_explore');
    setCurrentRoom('living_room');
  };

  const handleSkipIntro = () => {
    ensureAudioInitialized();
    sound.playClick();
    setScene('house_explore');
    setCurrentRoom('living_room');
  };

  const handleReturnToArrival = () => {
    sound.playClick();
    setScene('arrival');
  };

  const handleNavigateRoom = (roomId: RoomId) => {
    sound.playClick();
    setCurrentRoom(roomId);
  };

  const handleFastTravel = (roomId: RoomId) => {
    ensureAudioInitialized();
    setCurrentRoom(roomId);
    setScene('house_explore');
  };

  return (
    <div
      onClick={ensureAudioInitialized}
      className="relative min-h-screen paper-canvas text-[#1C1917] selection:bg-[#EBE4D5] selection:text-[#1C1917]"
    >
      {/* Dynamic Hand-Drawn Paper Particle & Drafting Background */}
      <AtmosphereCanvas scene={scene} currentRoom={currentRoom} />

      {/* Primary Spatial Scenes */}
      <AnimatePresence mode="wait">
        {scene === 'arrival' && (
          <motion.div
            key="arrival"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ArrivalScene
              onEnterHouse={handleStartDoorTransition}
              onOpenMap={() => setIsMapOpen(true)}
              onSkipIntro={handleSkipIntro}
            />
          </motion.div>
        )}

        {scene === 'door_transition' && (
          <motion.div
            key="door_transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <DoorTransition
              onComplete={handleCompleteDoorTransition}
              onCancel={handleReturnToArrival}
            />
          </motion.div>
        )}

        {scene === 'house_explore' && (
          <motion.div
            key="house_explore"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full relative"
          >
            {/* Minimalist Top & Bottom Sketchbook Controls */}
            <NavigationHUD
              currentRoomId={currentRoom}
              onNavigateRoom={handleNavigateRoom}
              onOpenMap={() => setIsMapOpen(true)}
              onOpenAccessibleView={() => setIsAccessibleViewOpen(true)}
              onReturnToArrival={handleReturnToArrival}
              activeObjectDetails={activeObjectDetails}
              onClearObjectDetails={() => setActiveObjectDetails(null)}
            />

            {/* Room Canvas Container */}
            <RoomContainer
              currentRoom={currentRoom}
              onNavigateRoom={handleNavigateRoom}
              onSelectProject={setSelectedProject}
              onSelectCertificate={setSelectedCertificate}
              onObjectClick={setActiveObjectDetails}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Hand-Drawn Architectural Floorplan Map Modal */}
      <HouseMapModal
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
        currentRoom={currentRoom}
        onSelectRoom={(roomId) => {
          if (scene !== 'house_explore') {
            setScene('house_explore');
          }
          handleNavigateRoom(roomId);
        }}
      />

      {/* Accessible Full Portfolio Scannable Document View Modal */}
      <AccessibleViewModal
        isOpen={isAccessibleViewOpen}
        onClose={() => setIsAccessibleViewOpen(false)}
      />

      {/* Project Blueprint Inspection Sheet */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
