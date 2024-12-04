import daysUntilFutureDate from "./daysUntilFutureDate";
import durationBetweenDates from "./durationBetweenDates";
import projectCompletionState from "./projectCompletionState";

function getDaysLeftStatus(daysLeft) {
  if (daysLeft == 1) {
    return "1 day left";
  } else {
    return `${daysLeft} days left`;
  }
}

function projectsViewModel(projects) {
  return projects.map((project) => {
    const daysUntilEndDate = daysUntilFutureDate(project.endDate);
    const duration = durationBetweenDates(project.startDate, project.endDate);
    const completionPercentage =
      duration && daysUntilEndDate
        ? projectCompletionState(duration, daysUntilEndDate)
        : 100;
    const completionStatus =
      daysUntilEndDate === 0
        ? "Completed"
        : getDaysLeftStatus(daysUntilEndDate);

    return {
      ...project,
      daysUntilEndDate,
      duration,
      completionPercentage,
      completionStatus,
    };
  });
}

export default projectsViewModel;
