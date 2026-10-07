import { useEffect, useState } from 'react';

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        const response = await fetch('/api/projects', { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Project service returned ${response.status}.`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Project service returned an invalid response.');
        }
        setProjects(data);
      } catch (loadError) {
        if (loadError.name !== 'AbortError') {
          setError(loadError.message || 'Unable to load projects.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProjects();
    return () => controller.abort();
  }, []);

  return { projects, loading, error };
}
