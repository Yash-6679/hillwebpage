import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = '', label }: StatCounterProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 });
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl font-serif font-bold text-[#CD853F]">
        {count}
        {suffix}
      </p>
      <p className="text-[#D2B48C] mt-2">{label}</p>
    </div>
  );
}
