import { useEffect, useState } from 'react';
import Expander from '../event/Expander';

export default function useExpander(id: string) {
  const [isExpanded, setExpandedStatus] = useState<boolean>(
    Expander.isExpanded(id)
  );

  useEffect(() => {
    const unsubscribe = Expander.listen(id, setExpandedStatus);

    return () => unsubscribe();
  }, [id]);

  return [isExpanded];
}
