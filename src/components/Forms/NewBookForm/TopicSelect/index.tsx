/* eslint-disable react/jsx-wrap-multilines */
import { Box, Chip, MenuItem, OutlinedInput, Select } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import _without from "lodash/without";
import "./TopicSelect.css";
import { Topic } from "../../../../store/books/new/Types";

type Props = {
  selectedTopics: string[];
  setSelectedTopics: Function;
  existingTopics: Topic[];
};

const TopicSelect = ({
  selectedTopics,
  setSelectedTopics,
  existingTopics,
}: Props) => {
  const handleChange = (event: any) => {
    setSelectedTopics(event.target.value);
  };

  const handleDelete = (e: MouseEvent, value: string) => {
    e.preventDefault();
    setSelectedTopics((current: string) => _without(current, value));
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
        <MenuItem value="" disabled>
          <em>None</em>
        </MenuItem>
        {existingTopics.map((topic) => (
          <MenuItem key={topic.id} value={topic.name}>
            {topic.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default TopicSelect;
