import "./App.css";
import Card from "./components/Card";
import Pill from "./components/Pill";

const _LOGIN = "Meredith";

function getTimeOfDay() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
}

const _DOCREVIEWLIST = [
  { content: "QA Assessments", value: 4, Type: "primary" },
  { content: "Faxed PCP Documentation", value: 2, Type: "primary" },
  { content: "Submitted Family Docs", value: 3, Type: "error" },
];

const _RECENTPATIENTLIST = [
  {
    patient_details: {
      first_name: "James",
      last_name: "Garcia",
      care_taker: { first_name: "Denise", last_name: "Garcia" },
    },
    status: "Visit completed",
    type: "default",
  },
  {
    patient_details: {
      first_name: "Danielle",
      last_name: "Roberts",
      care_taker: { first_name: "Tiffany", last_name: "Roberts" },
    },
    status: "Started training",
    type: "success",
  },
  {
    patient_details: {
      first_name: "Victoria",
      last_name: "Larson",
      care_taker: { first_name: "Will", last_name: "Larson" },
    },
    status: "Missing documentation",
    type: "warning",
  },
];

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1 id="home-greeting">
          Good {getTimeOfDay()}, {_LOGIN}!
        </h1>
        <div className="main-container">
          <div className="card-col">
            <Card title={"Documents to Review"}>
              <div className="card-col">
                {_DOCREVIEWLIST.map((item, index) => {
                  return (
                    <div className="review-item" key={`doc-review-${index}`}>
                      <span className="item-content">{item.content}</span>
                      <Pill
                        btnContent={"Review"}
                        btnPrefix={item.value}
                        btnClickHandler={() => null}
                        btnSize={"large"}
                        btnType={item.Type}
                      />
                    </div>
                  );
                })}
              </div>
            </Card>
            <Card
              title={"Recent Patients"}
              ctaActionHandler={() => null}
              ctaContent={"View all"}
            >
              {_RECENTPATIENTLIST.map((patient, index) => {
                let _p = patient.patient_details;
                return (
                  <div
                    className="patient-item"
                    key={`patient-details-${index}`}
                  >
                    <div className="name-details">
                      <span className="primary-content">
                        {_p.first_name} {_p.last_name}
                      </span>
                      <span className="secondary-content">
                        {_p.care_taker.first_name} {_p.care_taker.last_name}
                      </span>
                    </div>
                    <Pill
                      btnContent={patient.status}
                      btnClickHandler={() => null}
                      btnSize={"small"}
                      btnType={patient.type}
                    />
                  </div>
                );
              })}
            </Card>
          </div>
          <Card title={"Upcoming visits"}></Card>
        </div>
      </div>
    </div>
  );
}

export default App;
