function FirstComponent() {
    return <h1>My very first component</h1>
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<FirstComponent />);