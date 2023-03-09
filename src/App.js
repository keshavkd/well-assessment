import "./App.css";
import Navbar from "./components/Navbar";
import Capsule from "./components/Capsule";
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
  { content: "QA Assessments", value: 4, Type: "violet" },
  { content: "Faxed PCP Documentation", value: 2, Type: "violet" },
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

const _DAYLIST = [
  { title: "Today", type: "primary" },
  { title: "Tomorrow", type: "default" },
  { title: "This week", type: "default" },
];

const _APPOINTMENTLIST = [
  {
    time: "10:00am",
    type: "Telehealth",
    theme: "blue",
    title: "PAT: Callie Torres",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    time: "12:00pm",
    type: "Telehealth",
    theme: "blue",
    title: "PAT: Derek Sheperd",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    time: "2:30pm",
    type: "In-person",
    theme: "violet",
    title: "Delegation: Alex Karev",
    content: "Lorem ipsum dolor sit amet",
  },
];

function App() {
  return (
    <div className="App">
      <div className="row">
        <Navbar />
        <div className="main-container">
          <div className="cards-container">
            <div className="card-col">
              <h1 id="home-greeting">
                Good {getTimeOfDay()}, {_LOGIN}!
              </h1>
              <div className="display-cards">
                <div className="card-col">
                  <Card cName={"review-card"} title={"Documents to Review"}>
                    <div className="card-col">
                      {_DOCREVIEWLIST.map((item, index) => {
                        return (
                          <div
                            className="review-item"
                            key={`doc-review-${index}`}
                          >
                            <span className="item-content">{item.content}</span>
                            <Pill
                              btnContent={"Review"}
                              btnPrefix={item.value}
                              btnSize={"medium"}
                              btnType={item.Type}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                  <Card
                    cName={"patients-card"}
                    title={"Recent Patients"}
                    ctaActionHandler={() => null}
                    ctaContent={"View all"}
                  >
                    {_RECENTPATIENTLIST.map((patient, index) => {
                      let _p = patient.patient_details;
                      return (
                        <div className="card-col">
                          <button
                            className="patient-item"
                            key={`patient-details-${index}`}
                          >
                            <div className="name-details">
                              <span className="primary-content">
                                {_p.first_name} {_p.last_name}
                              </span>
                              <span className="secondary-content">
                                {_p.care_taker.first_name}{" "}
                                {_p.care_taker.last_name}
                              </span>
                            </div>
                            <Pill
                              btnContent={patient.status}
                              btnSize={"small"}
                              btnType={patient.type}
                            />
                          </button>
                          {index === _RECENTPATIENTLIST.length - 1 ? (
                            <></>
                          ) : (
                            <hr />
                          )}
                        </div>
                      );
                    })}
                  </Card>
                </div>
                <Card cName={"visits-card"} title={"Upcoming visits"}>
                  <div className="day-container">
                    {_DAYLIST.map((item, index) => {
                      return (
                        <Pill
                          key={`day-${index}`}
                          btnContent={item.title}
                          btnSize={"medium"}
                          btnType={item.type}
                        />
                      );
                    })}
                  </div>
                  <div className="appointment-container">
                    {_APPOINTMENTLIST.map((appointment, index) => {
                      return (
                        <Capsule
                          key={`appointment-${index}`}
                          time={appointment.time}
                          type={appointment.type}
                          theme={appointment.theme}
                          title={appointment.title}
                          content={appointment.content}
                        />
                      );
                    })}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
