function useState<T>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return {
        get,
        set
    }
}

const newState = useState<string>();
newState.set("Willian");