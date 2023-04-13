/* eslint-disable react/jsx-wrap-multilines */
import { Box, Chip, MenuItem, OutlinedInput, Select } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import _without from "lodash/without";
import "./TopicSelect.css";
import { Topic } from "../../../store/books/new/Types";

type Props = {
  selectedTopics: string[];
  setSelectedTopics: Function;
  existingTopics: Topic[];
  showedTopics: Topic[];
  setShowedTopics: Function;
};

const TopicSelect = ({
  selectedTopics,
  setSelectedTopics,
  existingTopics,
  showedTopics,
  setShowedTopics,
}: Props) => {
  const handleChange = (event: any) => {
    setSelectedTopics(event.target.value);
    setShowedTopics(
      showedTopics.filter((topic) => !event.target.value.includes(topic.name))
    );
  };

  const handleDelete = (e: MouseEvent, value: string) => {
    e.preventDefault();
    setSelectedTopics((current: string[]) => _without(current, value));
    const selected = existingTopics.find(
      (current: Topic) => current.name === value
    );
    if (selected !== undefined) {
      setShowedTopics([...showedTopics, selected]);
    }
  };

  return (
    <div className="topic-select">
      <Select
        className="topic-select-menu"
        data-testid="new-book-select-topics"
        multiple
        value={selectedTopics}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                data-testid={value}
                key={value}
                label={value}
                deleteIcon={
                  <CancelIcon
                    onMouseDown={(event: any) => event.stopPropagation()}
                  />
                }
                onDelete={(e) => handleDelete(e, value)}
              />
            ))}
          </Box>
        )}
      >
        {showedTopics.map((topic) => (
          <MenuItem key={topic.id} value={topic.name}>
            {topic.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default TopicSelect;
