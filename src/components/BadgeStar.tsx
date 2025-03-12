import { StarIcon } from 'lucide-react';

type BadgeStarPropsValue = {
  count: number;
};

const BadgeStar = ({ count }: BadgeStarPropsValue) => (
  <>
    <span>{count}</span>
    <StarIcon
      className="fill-gray-600  text-gray-600 group-hover:fill-white group-hover:text-white  transition-all ease-in-out pointer-events-none size-4 shrink-0 inline-block ml-1"
      style={{ verticalAlign: '-3px' }}
    />
  </>
);

export default BadgeStar;
