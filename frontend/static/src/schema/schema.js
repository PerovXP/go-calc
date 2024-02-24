const DURATIONS = {
    "addition": 100,
    "subtraction": 100,
    "multiplication": 100,
    "division": 100,
}

const CALCULATIONS_GET = [
    {
        "id": "test-test-test-test",
        "expression": "3+3/3",
        "status": "new"
    },
    {
        "id": "test-test-test-test",
        "expression": "abracadabra",
        "status": "error", // "error", "success", "new"
        "agent_id": 1,
        "worker_id": 1
    },
    {
        "id": "test-test-test-test",
        "expression": "2+2*2",
        "status": "process", // "error", "success", "new"
        "agent_id": 1,
        "worker_id": 1
    },
    {
        "id": "test-test-test-test",
        "expression": "2*2/4",
        "status": "success",
        "result": 1
    }
];

const CALCULATION_GET = {
    "expression": "493+545"
};

const CALCULATION_ADD = {
    "expression": "1+1+1"
};

const AGENTS_GET = [
    {
        "id": "test-test-test-test",
        "address": "http://localhost:25566/",
        "status": "alive",
        "workers": [
            {
                "state": "processing",
                "target": "test-test-test-test"
            },
            {
                "state": "idle"
            }
        ]
    },
    {
        "id": "test-test-test-test",
        "address": "http://localhost:25565/",
        "status": "dead"
    }
];