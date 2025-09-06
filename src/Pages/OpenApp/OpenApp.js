import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import HomeAppContent from '../Home/HomeAppContent';

export default function OpenApp() {
    let [searchParams] = useSearchParams();
    const url = searchParams.get('urlTo')
    const searchType = searchParams.get('type')
    const amount = searchParams.get('amount')
    const status = searchParams.get('status')
    const donation = searchParams.get('donation')

    const openApp = (url, type) => {
        // const os = window.navigator.userAgent
        // const isAndroid = os.includes('Android')

        try {

            if (type === 'custom') {
                if (url) {
                    window.open(`${url}`, '_self')
                    return
                }
            }

            let urlToChange = url
            if (donation === 'true') {
                urlToChange = `donation-complete?amount=${amount}&status=${status}`
            }

            // if (isAndroid) {
            if (urlToChange) { window.open(`shikkhanir://${urlToChange}`, '_self') } else { window.open('shikkhanir://', '_self') }
            // } else {
            //     window.open('https://play.google.com/store/apps/details?id=com.hmsoft.shikkhanir', '_self')
            // }

        } catch (error) {
            window.open('https://play.google.com/store/apps/details?id=com.hmsoft.shikkhanir', '_self')
        }
    }


    useEffect(() => {
        openApp(url, searchType)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, searchType])



    return (
        <div className='flex items-center justify-center p-5 lg:p-40 w-full h-screen bg-gray-100 dark:bg-gray-800'>
            <div className="flex items-center justify-center p-2 rounded-3xl bg-white w-full shadow-xl">
                <HomeAppContent />
            </div>
        </div>
    )
}
