const CONST = {
    "DURATIONS": [
        {
            "name": "Сложение",
            "operation": "addition",
            "icon": "plus"
        },
        {
            "name": "Вычитание",
            "operation": "subtraction",
            "icon": "dash"
        },
        {
            "name": "Умножение",
            "operation": "multiplication",
            "icon": "dot"
        },
        {
            "name": "Деление",
            "operation": "division",
            "icon": "slash"
        }
    ],

    "TABS": [
        "calculations",
        "agents",
        "duration"
    ],
    "DEFAULT_TAB": "calculations",

    "UPDATE_TIME": 1000, // Information update time (in ms)

    "API_HOST": "http://localhost:8080"
}

class CalculatorInterface {
    constructor() {
        console.log("Init Interface class");

        this.state = {
            "tabs": {
                "list": CONST.TABS,

                "current": CONST.DEFAULT_TAB
            }
        }

        for (const tab of this.state.tabs.list) {
            document.getElementById(`nav_${tab}`).onclick = () => this.showTab(tab);
        }

        this.showTab(CONST.DEFAULT_TAB);

        this.initializeDurationTable().then(() => console.log("Duration table initialized"));
    }

    showTab(name) {
        // Switching tab visibility
        for (const tab of this.state.tabs.list.filter((tab) => tab !== name)) {
            document.getElementById(`tab_${tab}`).classList.add("currently-hidden");
        }
        document.getElementById(`tab_${name}`).classList.remove("currently-hidden");

        // Removing `active` class from previous tab
        document.getElementById(`nav_${this.state.tabs.current}`).classList.remove("active");

        // Giving `active` class to new tab
        const navbarTab = document.getElementById(`nav_${name}`);
        navbarTab.classList.add("active");

        // Moving accessibility span to new tab
        navbarTab.appendChild(document.getElementById("activeSpan"));

        console.log(`Switching to tab ${name}`);

        this.state.tabs.current = name;
    }

    // This function is async because in completed version there must be
    // an orchestrator, which will return current durations
    async initializeDurationTable() {
        const table = document.getElementById("operations");

        // const response = await fetch(CONST.API_HOST + "/durations/get");
        // const currentDurations = await response.json();

        const currentDurations = {
            "addition": 200,
            "subtraction": 250,
            "multiplication": 300, // Спроси у сценариста
            "division": 993
        };

        for (const d of CONST.DURATIONS) {
            const input = document.createElement("input");
            input.type = "number";
            input.classList.add("form-control");
            input.placeholder = "Положительное число";
            input.id = `operation_${d.operation}`;

            input.value = currentDurations[d.operation];

            const label = document.createElement("label");
            label.setAttribute("for", `operation_${d.operation}`);
            label.classList.add(...["form-label", "mt-3"]);
            label.innerHTML = `<i class="bi bi-${d.icon}"></i> ${d.name}`;

            table.appendChild(label);
            table.appendChild(input);
        }

        document.getElementById("duration_save").onclick = () => this.saveDurations();
    }

    saveDurations() {
        const durations = {};

        for (const d of CONST.DURATIONS) {
            durations[d.operation] = Number(document.getElementById(`operation_${d.operation}`).value);
        }

        console.log("Sending durations:", durations);

        // fetch(CONST.API_HOST + "/durations/update", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json;charset=utf-8"
        //     },
        //     body: JSON.stringify(durations)
        // }).then(() => console.log("Sent durations to server"));

        alert("Сохранено!");
    }
}