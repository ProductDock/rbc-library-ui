/* eslint-disable no-unused-vars */
import { Box, Chip, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import _without from "lodash/without";
import { useNewBookContext } from "../../../store/books/new/NewBookContext";
import "./TopicSelect.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type Props = {
    selectedTopics: string[];
    setSelectedTopics: Function;
}

const TopicSelect = ({ selectedTopics, setSelectedTopics }: Props) => {
    const { existingTopics } = useNewBookContext();
    const theme = useTheme();

    const handleChange = (event: any, object: any) => {
        setSelectedTopics(event.target.value);
      };

    const handleDelete = (e: MouseEvent, value: string) => {
      e.preventDefault();
      setSelectedTopics((current: string) => _without(current, value));
    };

    return (
      <Select
        className="topic-select"
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        placeholder="ok"
        multiple
        value={selectedTopics}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                deleteIcon={(
                  <CancelIcon
                    onMouseDown={(event: any) => event.stopPropagation()}
                  />
              )}
                onDelete={(e) => handleDelete(e, value)}
              />
          ))}
          </Box>
      )}
        MenuProps={MenuProps}
      >
        {existingTopics.map((topic) => (
          <MenuItem
            key={topic.id}
            value={topic.name}
            style={getStyles(topic.name, selectedTopics, theme)}
          >
            {topic.name}
          </MenuItem>
      ))}
      </Select>
    );
};

export default TopicSelect;
