import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

export default function OpenApp() {
    let [searchParams, setSearchParams] = useSearchParams();
    const url = searchParams.get('urlTo')

    useEffect(() => {
        openApp(url)
    }, [url])


    const openApp = (url) => {
        const os = window.navigator.userAgent
        const isAndroid = os.includes('Android')
        console.log(os);
        try {
            if (isAndroid) {
                if (url) { window.open(`shikkhanir://${url}`, '_self') }
                else { window.open('shikkhanir://', '_self') }
            } else {
                window.open('https://play.google.com/store/apps/details?id=com.hmsoft.shikkhanir', '_self')
            }

        } catch (error) {
            window.open('https://play.google.com/store/apps/details?id=com.hmsoft.shikkhanir', '_self')
        }
    }

    return (
        <div className='container mt-5 text-center'>
            <h1>Open ShikkhaNir</h1>
            <button className='btn btn-primary' onClick={openApp}>Open App</button>
        </div>
    )
}
