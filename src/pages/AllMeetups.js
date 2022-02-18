import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'See on esimene kohtumine',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Kohtumiste allee 5, 12345 Tartu linn',
        description:
            'See on esimene kohtumine. Ära maha maga!',
    },
    {
        id: 'm2',
        title: 'See on teine kohtumine',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Kohtumiste allee 5, 12345 Tartu linn',
        description:
            'See on teine kohtumine. Ära maha maga!',
    },
]

function AllMeetupsPage() {

    return (
        <section>
            <h1>Kõik kohtumised</h1>
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
};

export default AllMeetupsPage;