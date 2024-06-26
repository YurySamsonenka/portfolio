import styled from 'styled-components';
import { BlockTitle } from '../BlockTitle';
import { AbilityItem } from './ability-item/AbilityItem';
import { buttomLine } from '../placeholders';

type Languages = {
  Bangla: number;
  English: number;
  Spanish: number;
};

type Skills = {
  Html: number;
  CSS: number;
  JS: number;
  PHP: number;
  WordPress: number;
};

type AbilityPropsType = {
  title: string;
  itemsAbilites: Languages | Skills;
};

export const AbilitesBlock = (props: AbilityPropsType) => {
  return (
    <StyledAbility>
      <BlockTitle title={props.title} />
      {Object.entries(props.itemsAbilites).map((el, i) => {
        return <AbilityItem key={i} name={el[0]} value={el[1]} rangeId={i} />;
      })}
    </StyledAbility>
  );
};

const StyledAbility = styled.div`
  ${buttomLine}
`;
