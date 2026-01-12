import { LucideIcon } from 'lucide-react';

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TrustBadge = ({ icon: Icon, title, description }: TrustBadgeProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border shadow-custom-sm transition-all duration-300 hover:shadow-custom-md hover:border-accent/20">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 mb-4">
        <Icon className="h-7 w-7 text-accent" />
      </div>
      <h3 className="heading-card text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default TrustBadge;
