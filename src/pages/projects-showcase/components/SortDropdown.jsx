import React from 'react';
import { motion } from 'framer-motion';
import Select from '../../../components/ui/Select';

const SortDropdown = ({ sortBy, onSortChange }) => {
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'name', label: 'Name (A-Z)' },
    { value: 'complexity', label: 'Complexity' },
    { value: 'duration', label: 'Duration' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-48"
    >
      <Select
        label="Sort by"
        options={sortOptions}
        value={sortBy}
        onChange={onSortChange}
        className="text-sm"
      />
    </motion.div>
  );
};

export default SortDropdown;