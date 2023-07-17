const DUMMY_EVENTS = [
    {
        id: "e1",
        title: "Programação para todos",
        description:
            "Todos podem aprender a codificar! Sim, todos! Neste evento ao vivo, vamos passar por todos os princípios básicos e começar a programar também.",
        location: "Somestreet 25, 12345 San Somewhereo",
        date: "2021-05-12",
        image: "images/coding-event.jpg",
        isFeatured: false,
    },
    {
        id: "e2",
        title: "Networking para introvertidos",
        description:
            "Nós sabemos: o networking não é divertido se você for uma pessoa introvertida. É por isso que criamos este evento - será muito mais fácil. Prometido!",
        location: "New Wall Street 5, 98765 New Work",
        date: "2021-05-30",
        image: "images/introvert-event.jpg",
        isFeatured: true,
    },
    {
        id: "e3",
        title: "Networking para extrovertidos",
        description:
            "Você provavelmente não precisa de ajuda com networking em geral, mas precisa concentrar sua energia corretamente - isso é algo em que a maioria das pessoas pode melhorar.",
        location: "My Street 12, 10115 Broke City",
        date: "2022-04-10",
        image: "images/extrovert-event.jpg",
        isFeatured: true,
    },
];
  
export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}
  
export function getAllEvents() {
    return DUMMY_EVENTS;
}
  
export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}
  
export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}