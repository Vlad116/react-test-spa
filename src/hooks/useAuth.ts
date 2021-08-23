const useAuth = () => {
    //     const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());
    //
    //     useEffect(() => {
    //         const listener = (newIsLogged: boolean) => {
    //             setIsLogged(newIsLogged);
    //         };
    //
    //         tokenProvider.subscribe(listener);
    //         return () => {
    //             tokenProvider.unsubscribe(listener);
    //         };
    //     }, []);
    //
    //     return [isLogged] as [typeof isLogged];
    return true
}

export default useAuth
