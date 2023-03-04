import { UpVote } from "./UpVote";


type PropositionLineProps = {
  title: string;
  id: number;
  voteCount: number;
};

export const Proposition = ({ title, id, voteCount }: PropositionLineProps) => {
  return (
    <div className="flex items-center justify-between w-full gap-2 p-6 bg-gray-800 border-gray-700 rounded-lg shadow">
      <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
      <UpVote voteCount={voteCount} propositionId={id} />
    </div>
  );
};