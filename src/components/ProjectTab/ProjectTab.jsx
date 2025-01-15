import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabs.css";
import Projects from "../../Shared/Projects/Projects";

const ProjectTab = () => {
	return (
		<Tabs>
			<TabList>
				<Tab>All</Tab>
				<Tab>Website</Tab>
				<Tab>App</Tab>
			</TabList>

			<TabPanel>
				<Projects project_type="all" />
			</TabPanel>

			<TabPanel>
				<Projects project_type="website" />
			</TabPanel>

			<TabPanel>
				<Projects project_type="app" />
			</TabPanel>
		</Tabs>
	);
};

export default ProjectTab;
