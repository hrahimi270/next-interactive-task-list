import PageEmptyTask from "./PageEmptyTask";

interface PageTasksContainerProps {
  emptyStateImage: string;
  emptyStateText: string;
}

export default function PageTasksContainer(props: PageTasksContainerProps) {
  return (
    <div className="flex-grow h-full mb-10 overflow-y-auto">
      <PageEmptyTask
        image={props.emptyStateImage}
        text={props.emptyStateText}
      />
    </div>
  );
}
