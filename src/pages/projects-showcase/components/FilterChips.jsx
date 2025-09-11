import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const FilterChips = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-hide">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          variant={activeCategory === 'All' ? 'default' : 'outline'}
          size="sm"
          onClick={() => onCategoryChange('All')}
          className="whitespace-nowrap"
        >
          All Projects
        </Button>
      </motion.div>
      {categories?.map((category, index) => (
        <motion.div
          key={category?.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
        >
          <Button
            variant={activeCategory === category?.name ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category?.name)}
            className="whitespace-nowrap"
          >
            {category?.name}
            <span className="ml-2 px-1.5 py-0.5 bg-current/20 rounded-full text-xs">
              {category?.count}
            </span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default FilterChips;