import { useEffect , useState} from "react"

export const useFetch = (url) => {

    const [state, setstate] = useState({
        data: null,
        isLoandig: true,
        hasError: null
    })

    const getFecht = async () => {

        setstate ({
            ...state,
            isLoandig: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setstate({
            data,
            isLoandig: false,
            hasError: null
        })
    }

    useEffect( () => {
        getFecht();
    }, [url])
    
  return {
    data: state.data,
    isLoandig: state.isLoandig,
    hasError: state.hasError
  }
}
