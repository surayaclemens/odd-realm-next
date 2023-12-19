import { useTranslation } from 'react-i18next';
// very weird error where this import is causing errors only for this page
// import '../../i18n';
import React from 'react';


function SiteTermsPage () {
    // const { t } = useTranslation();

    return(
        <div className='flex min-h-screen flex-col items-start justify-start px-8 lg:px-28 font-sans text-black'>
            <h1 className='text-lg uppercase lg:text-2xl my-2'>Site Terms</h1>
            <p className='text-md lg:text-lg'>terms and conditions body</p>

        </div>
    );
}

export default SiteTermsPage;