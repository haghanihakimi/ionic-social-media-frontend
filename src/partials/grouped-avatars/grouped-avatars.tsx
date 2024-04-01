import React from 'react';
import { letterizeNumbers } from '../../server/plugins';
import './grouped-avatars.css';

const AvatarGroup: React.FC<{ total: number, renderSurplus: any, avatars: any }> = ({ total, renderSurplus, avatars }) => {
    const visibleAvatars = avatars.slice(0, total);

    return (
        <div className="w-fit relative flex flex-row items-center gap-0 px-2">
            {visibleAvatars.map((avatar: any, index: number) => (
                <img key={index} className="w-6 h-6 rounded-full object-cover -ml-4 border border-slate-200" src={avatar.src} alt={avatar.alt} />
            ))}
            <span className='w-6 h-6 rounded-full text-[8px] bg-primary text-slate-200 border border-slate-200 flex justify-center items-center -ml-4'>
                {letterizeNumbers(963, 99)}
            </span>
        </div>
    );
};

export default AvatarGroup;