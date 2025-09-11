import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchTerm, onSearchChange, totalProjects, filteredCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="relative">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <Input
          type="search"
          placeholder="Search projects by name or technology..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="pl-10 pr-4 py-3 w-full bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/20"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            <Icon name="X" size={16} />
          </button>
        )}
      </div>
      {/* Search Results Info */}
      {searchTerm && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 mt-2 p-3 bg-card border border-border rounded-lg shadow-custom-sm"
        >
          <p className="text-sm text-muted-foreground">
            Found <span className="font-medium text-foreground">{filteredCount}</span> of{' '}
            <span className="font-medium text-foreground">{totalProjects}</span> projects
            {searchTerm && (
              <span>
                {' '}matching "<span className="font-medium text-primary">{searchTerm}</span>"
              </span>
            )}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SearchBar;