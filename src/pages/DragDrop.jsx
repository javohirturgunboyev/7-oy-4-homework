import React, { useState, useCallback } from 'react';

function DragDrop() {
    const [cardList, setCardList] = useState([
        { id: 1, order: 3, text: 'Kartochka 3' },
        { id: 2, order: 1, text: 'Kartochka 1' },
        { id: 3, order: 2, text: 'Kartochka 2' },
        { id: 4, order: 4, text: 'Kartochka 4' },
    ]);

    const [currentCard, setCurrentCard] = useState(null);

    const dragStartHandler = useCallback((e, card) => {
        setCurrentCard(card);
        e.target.style.cursor = 'grabbing';
    }, []);

    const dragEndHandler = useCallback((e) => {
        e.target.style.background = 'white';
        e.target.style.cursor = 'grab';
    }, []);

    const dragOverHandler = useCallback((e) => {
        e.preventDefault();
        e.target.style.background = 'lightgray';
    }, []);

    const dragLeaveHandler = useCallback((e) => {
        e.target.style.background = 'white';
    }, []);

    const dropHandler = useCallback(
        (e, card) => {
            e.preventDefault();
            if (currentCard.id === card.id) return; 
            setCardList(
                cardList.map((c) => {
                    if (c.id === card.id) {
                        return { ...c, order: currentCard.order };
                    }
                    if (c.id === currentCard.id) {
                        return { ...c, order: card.order };
                    }
                    return c;
                })
            );
            e.target.style.background = 'white';
        },
        [cardList, currentCard]
    );

    const sortCards = useCallback((a, b) => a.order - b.order, []);

    return (
        <div className="flex flex-wrap bg-blue-400  ml-96 mr-80 mt-20">
            {cardList.length > 0 &&
                cardList.sort(sortCards).map((card) => (
                    <div
                        key={card.id}
                        draggable={true}
                        onDragStart={(e) => dragStartHandler(e, card)}
                        onDragLeave={dragLeaveHandler}
                        onDragEnd={dragEndHandler}
                        onDragOver={dragOverHandler}
                        onDrop={(e) => dropHandler(e, card)}
                        className="w-[200px] h-[300px] rounded-lg border-4 border-red-500 flex justify-center items-center m-5 cursor-grab"
                    >
                        {card.text}
                    </div>
                ))}
        </div>
    );
}

export default DragDrop;
