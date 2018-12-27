const createObservable = subscribe => {
    return {
        subscribe
    };
};

const arrayObservable = createObservable(observer => {
    [10, 20, 30].forEach(observer.next);
    observer.complete();
});

const observer = {
    next: data => {
        console.log(data);
    },
    error: err => {
        console.log(err);
    },
    complete: () => {
        console.log('done');
    }
};

arrayObservable.subscribe(observer);
