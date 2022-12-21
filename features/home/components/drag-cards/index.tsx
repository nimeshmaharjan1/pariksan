import React from 'react';

import useDrag from '@features/home/hooks/use-card-drag.hook';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { BsChatSquareQuote } from 'react-icons/bs';
import { HiBookOpen } from 'react-icons/hi';
import { ImQuotesLeft } from 'react-icons/im';
import { render } from 'react-dom';
import { RevealList } from 'next-reveal';
import Image from 'next/image';
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const CardDrag: React.FC = () => {
    // NOTE: for drag by mouse
    const { dragStart, dragStop, dragMove, dragging } = useDrag();
    const handleDrag =
        ({ scrollContainer }: scrollVisibilityApiType) =>
            (ev: React.MouseEvent) =>
                dragMove(ev, (posDiff) => {
                    if (scrollContainer.current) {
                        scrollContainer.current.scrollLeft += posDiff;
                    }
                });

    const [selected, setSelected] = React.useState<string>('');
    const handleItemClick = (itemId: string) => () => {
        if (dragging) {
            return false;
        }
        setSelected(selected !== itemId ? itemId : '');
    };

    function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
        const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

        if (isThouchpad) {
            ev.stopPropagation();
            return;
        }

        if (ev.deltaY < 0) {
            apiObj.scrollNext();
        } else if (ev.deltaY > 0) {
            apiObj.scrollPrev();
        }
    }
    const arr = [{
        name: 'Nimesh Maharjan',
        college: 'Islington College'
    }, {
        name: 'Aava Adhikari',
        college: 'Softwarica College'
    }, {
        name: 'Saugat Khadka',
        college: 'Islington College'
    }, {
        name: "Sushan Prajapati",
        college: 'Herald College'
    }]
    return (
        <div onMouseLeave={dragStop} className='my-8'>
            <ScrollMenu
                onWheel={onWheel}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
            >
                <RevealList interval={100} delay={200} duration={1000} reset={false} className="flex gap-6">
                    {arr.map((i) => (
                        <div key={i.name} className="card col-span-4 h-96 w-80 shadow-lg bg-base-200 cursor-move">
                            <div className="card-body p-2 gap-0">
                                <ImQuotesLeft className="text-primary h-16 w-24"></ImQuotesLeft>
                                <div className="px-5 py-2">
                                    <p className="text-xl font-bold">This was an amazing course.</p>
                                    <p className="prose py-1 text-primary">
                                        This was an amazing course! I can’t say enough good things
                                        about this couse.
                                    </p>
                                    <div className="info flex gap-2 items-center">
                                        <div className="avatar my-2">
                                            <div className="w-16 shadow-lg rounded-full">
                                                <Image width={200} height={200} alt={'user'} src="/images/user-icon.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-bold">{i.name}</p>
                                            <p className="text-gray-500 prose-sm">{i.college}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}</RevealList>
            </ScrollMenu>
        </div>
    );
};

export default CardDrag;
