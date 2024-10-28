import { useEffect, useState } from 'react';
import { ListItemIcon } from '../../base';
import { useTheme } from '../../theme';
import CollapsibleSection from './CollapsibleSection';
import ChallengesIcon from './Icons/ChallengesIcon';
import { slugify } from './helper';
import { LabelDiv } from './style';
import { FilteredAcademyData } from './types';

interface ChallengesSectionProps {
  filteredAcademyData: FilteredAcademyData;
}

const ChallengesSection: React.FC<ChallengesSectionProps> = ({ filteredAcademyData }) => {
  const theme = useTheme();
  const [openChallenges, setOpenChallenges] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(true);

  useEffect(() => {
    if (autoUpdate) {
      setOpenChallenges((filteredAcademyData?.['challenges'] ?? []).length > 0);
    }
  }, [filteredAcademyData, autoUpdate]);

  const toggleOpenChallenges = () => {
    setOpenChallenges((prev) => !prev);
    setAutoUpdate(false);
  };

  const navigateToChallenge = (item: string) => {
    window.location.href = `/academy/challenges/${slugify('' + item)}`;
  };

  const renderChallengeItem = (item: string, index: number) => (
    <LabelDiv key={index} clickable={true} onClick={() => navigateToChallenge(item)}>
      <ListItemIcon sx={{ minWidth: '1.5rem', marginRight: 1 }}>
        <ChallengesIcon
          primaryFill={theme.palette.icon.default}
          secondaryFill={theme.palette.icon.secondary}
          brandFill={theme.palette.icon.secondary}
        />
      </ListItemIcon>
      {item}
    </LabelDiv>
  );

  return (
    <>
      <hr
        style={{
          backgroundColor: theme.palette.background.secondary,
          border: 'none',
          height: '1px',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}
      />
      <CollapsibleSection
        title="Challenges"
        isOpen={openChallenges}
        onToggle={toggleOpenChallenges}
        items={filteredAcademyData['challenge'] ?? []}
        renderItem={renderChallengeItem}
        tooltip="Learn CNCF projects by taking and completing time-based, hands-on labs. [Browse all challenges](/academy/challenges)"
        emptyState="No active challenges for this technology"
      />
    </>
  );
};

export default ChallengesSection;
