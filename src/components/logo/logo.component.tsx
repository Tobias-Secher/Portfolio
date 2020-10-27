import React from 'react';
import './logo.style.scss';

const Logo = (): JSX.Element => {
    return (
        <div className={'logo-wrapper'}>
            <svg width="100%" height="100%" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.098877" width="7.62118" height="3.86008" rx="1.93004" fill="#3092EC" />
                <rect x="0.098877" y="5.34473" width="7.62118" height="3.86008" rx="1.93004" fill="#F15B28" />
                <rect x="0.098877" y="10.5906" width="7.62118" height="3.86008" rx="1.93004" fill="#9B88DC" />
                <rect x="9.79858" y="5.24585" width="7.62118" height="3.86008" rx="1.93004" fill="#FBB148" />
                <rect x="5.93848" y="21.082" width="7.62118" height="3.86008" rx="1.93004" fill="#26FB9A" />
                <rect x="19.4983" y="5.24585" width="7.62118" height="3.86008" rx="1.93004" fill="#3092EC" />
                <rect x="15.5393" width="7.62118" height="3.86008" rx="1.93004" fill="#AB6CFE" />
                <circle cx="11.6297" cy="1.93004" r="1.93004" fill="#26FB9A" />
                <circle cx="11.6297" cy="12.5206" r="1.93004" fill="#26FB9A" />
                <circle cx="17.4693" cy="12.5206" r="1.93004" fill="#F15B28" />
                <circle cx="17.4693" cy="12.5206" r="1.93004" fill="#F15B28" />
                <circle cx="17.568" cy="23.0121" r="1.93004" fill="#F15B28" />
                <circle cx="17.568" cy="23.0121" r="1.93004" fill="#F15B28" />
                <circle cx="2.02892" cy="17.7662" r="1.93004" fill="#FFB549" />
                <circle cx="1.93004" cy="23.0121" r="1.93004" fill="#3092EC" />
                <circle cx="27.0699" cy="1.93004" r="1.93004" fill="#FCB248" />
            </svg>
        </div>
    )
}

export default Logo;