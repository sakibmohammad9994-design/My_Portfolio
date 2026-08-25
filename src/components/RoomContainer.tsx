import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RoomId } from '../types';
import { HOUSE_ROOMS } from '../data/portfolioData';

// Individual Room Components
import { LivingRoom } from './rooms/LivingRoom';
import { TechRoom } from './rooms/TechRoom';
import { LaboratoryRoom } from './rooms/LaboratoryRoom';
import { LibraryRoom } from './rooms/LibraryRoom';
import { TrophyRoom } from './rooms/TrophyRoom';
import { OfficeRoom } from './rooms/OfficeRoom';
import { ResearchLabRoom } from './rooms/ResearchLabRoom';
import { SecretRoom } from './rooms/SecretRoom';
import { ExitRoom } from './rooms/ExitRoom';

interface RoomContainerProps {
  currentRoom: RoomId;
  onNavigateRoom: (roomId: RoomId) => void;
  onSelectProject: (project: any) => void;
  onSelectCertificate: (cert: any) => void;
  onObjectClick?: (details: string) => void;
}

export const RoomContainer: React.FC<RoomContainerProps> = ({
  currentRoom,
  onNavigateRoom,
  onSelectProject,
  onSelectCertificate,
  onObjectClick,
}) => {
  const roomMeta = HOUSE_ROOMS.find((r) => r.id === currentRoom) || HOUSE_ROOMS[0];

  const renderActiveRoom = () => {
    switch (currentRoom) {
      case 'living_room':
        return <LivingRoom onNavigateRoom={onNavigateRoom} onObjectClick={onObjectClick} />;
      case 'tech_room':
        return <TechRoom onObjectClick={onObjectClick} />;
      case 'laboratory':
        return (
          <LaboratoryRoom
            onSelectProject={onSelectProject}
            onObjectClick={onObjectClick}
          />
        );
      case 'library':
        return <LibraryRoom onObjectClick={onObjectClick} />;
      case 'trophy_room':
        return (
          <TrophyRoom
            onSelectCertificate={onSelectCertificate}
            onObjectClick={onObjectClick}
          />
        );
      case 'office':
        return <OfficeRoom onObjectClick={onObjectClick} />;
      case 'research_lab':
        return <ResearchLabRoom onObjectClick={onObjectClick} />;
      case 'secret_room':
        return <SecretRoom onObjectClick={onObjectClick} />;
      case 'exit_room':
        return <ExitRoom onObjectClick={onObjectClick} />;
      default:
        return <LivingRoom onNavigateRoom={onNavigateRoom} onObjectClick={onObjectClick} />;
    }
  };

  return (
    <div className="relative w-full min-h-screen pt-16 sm:pt-20 pb-36 sm:pb-40 px-3 sm:px-6 md:px-8 paper-canvas flex flex-col items-center justify-start overflow-x-hidden">
      {/* Hand-Drawn Room Canvas Frame */}
      <div className="w-full max-w-[96vw] 2xl:max-w-[1760px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoom}
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.98 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActiveRoom()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
