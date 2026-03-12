import PhotoComponent from "./PhotoComponent";

export default function Helloworld() {
    return (
        <div>
            <h1>Hello, Dwight!</h1>
            <PhotoComponent
                src="/avatar.jpg"
                alt="My photo"
                width={300}
                height={400}
            />
        </div>
    );
}
