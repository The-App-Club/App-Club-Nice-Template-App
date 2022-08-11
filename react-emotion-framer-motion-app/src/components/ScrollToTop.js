import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
function ScrollToTop() {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      if (action !== 'POP') {
        window.scrollTo(0, 0);
      }
    });
    return () => unlisten();
  }, []);
  return null;
}
export { ScrollToTop };
