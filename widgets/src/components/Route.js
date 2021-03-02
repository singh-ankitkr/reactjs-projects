import {useState, useEffect} from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.path);

    useEffect(() => {
        const onLocationChange = () => {
            console.log('Location Change');
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);

        return () => {
          window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null;
};



export default Route;