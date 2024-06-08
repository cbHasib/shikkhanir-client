import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import HomeAppContent from '../Home/HomeAppContent';

export default function OpenApp() {
    let [searchParams] = useSearchParams();
    const url = searchParams.get('urlTo')

    useEffect(() => {
        if (url) openApp(url)
    }, [url])


    const openApp = (url) => {
        const os = window.navigator.userAgent
        const isAndroid = os.includes('Android')

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
        <div className='flex items-center justify-center p-5 lg:p-40 w-full h-screen bg-gray-100 dark:bg-gray-800'>
            <div className="flex items-center justify-center p-2 rounded-3xl bg-white w-full shadow-xl">
            <HomeAppContent />
        </div>
        </div>
    )
}
