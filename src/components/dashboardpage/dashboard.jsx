import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faSearch, faSun, faStar as faStarSolid, faCalendarAlt,
  faUserFriends, faFlag, faClipboard, faList, faPlus, faBars,
  faEllipsisV, faChevronUp, faChevronDown, faCheckSquare, faStar as faStarRegular, faSquare as faSquareRegular,
  faCaretDown, faCaretRight, faPen, faTrash, faCopy, faPrint, faShareAlt, faSort, faEye
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// --- Dropdown Menu Component (Main Content Area - now includes list management) ---
const DropdownMenu = ({
  isVisible,
  onToggleCompletedTasks,
  showCompletedTasks,
  onPrintList,
  onShareList,
  onSortBy,
  // New props for list management:
  isUserCreatedList,
  onRenameList,
  onDeleteList,
  onDuplicateList
}) => {
  if (!isVisible) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-20 main-dropdown-menu">
      <button
        onClick={onSortBy}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
      >
        <FontAwesomeIcon icon={faSort} className="mr-2 fa-fw" /> Sort by
      </button>
      <button
        onClick={onPrintList}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
      >
        <FontAwesomeIcon icon={faPrint} className="mr-2 fa-fw" /> Print list
      </button>
      <button
        onClick={onToggleCompletedTasks}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
      >
        <FontAwesomeIcon icon={faEye} className="mr-2 fa-fw" /> {showCompletedTasks ? 'Hide completed tasks' : 'Show completed tasks'}
      </button>
      <button
        onClick={onShareList}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
      >
        <FontAwesomeIcon icon={faShareAlt} className="mr-2 fa-fw" /> Share list
      </button>

      {isUserCreatedList && (
        <>
          <hr className="my-1 border-gray-200" />
          <div className="px-4 py-1 text-xs text-gray-500 uppercase font-semibold">List Actions</div>
          <button
            onClick={() => { onRenameList(); }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
          >
            <FontAwesomeIcon icon={faPen} className="mr-2 fa-fw" /> Rename list
          </button>
          <button
            onClick={() => { onDeleteList(); }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2 fa-fw" /> Delete list
          </button>
          <button
            onClick={() => { onDuplicateList(); }}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
          >
            <FontAwesomeIcon icon={faCopy} className="mr-2 fa-fw" /> Duplicate list
          </button>
        </>
      )}
    </div>
  );
};


// --- Task Item Component (Reverted: no dropdown, no extra icon) ---
const TaskItem = ({ task, onToggleComplete, onToggleStar }) => {
  const checkboxColorClass = task.completed ? 'text-gray-500' : 'text-blue-500';

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-sm md:border mb-3">
      <button onClick={() => onToggleComplete(task.id)} className={`mr-3 flex-shrink-0 ${checkboxColorClass} hover:text-blue-700`}>
        <FontAwesomeIcon icon={task.completed ? faCheckSquare : faSquareRegular} className="text-base" />
      </button>
      <span className={`flex-grow text-gray-800 text-base ${task.completed ? 'line-through text-gray-500' : ''}`}>
        {task.text}
      </span>
      <button onClick={() => onToggleStar(task.id)} className="ml-3 text-gray-400 hover:text-yellow-500 flex-shrink-0">
        <FontAwesomeIcon icon={task.starred ? faStarSolid : faStarRegular} className={`text-base ${task.starred ? 'text-yellow-500' : ''}`} />
      </button>
      {/* Removed the three-dots menu from here */}
    </div>
  );
};

// --- Input Modal Component ---
const InputModal = ({ show, title, placeholder, onClose, onSubmit, defaultValue = '' }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    if (show) {
      setInputValue(defaultValue);
    }
  }, [show, defaultValue]);

  if (!show) return null;

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            {title.includes("Rename") ? "Rename" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Select List Modal Component ---
const SelectListModal = ({ show, onClose, onSelectList, availableLists }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Select List to Add</h3>
        {availableLists.length === 0 ? (
          <p className="text-gray-600">No lists available to add.</p>
        ) : (
          <div className="max-h-60 overflow-y-auto">
            {availableLists.map(list => (
              <button
                key={list.id}
                onClick={() => onSelectList(list.id)}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md text-gray-800 text-sm"
              >
                {list.name}
              </button>
            ))}
          </div>
        )}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Group Dropdown Menu Component ---
const GroupDropdownMenu = ({ isVisible, onClose, onRenameGroup, onRemoveGroup, onUngroupLists }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-20 group-dropdown-menu">
      <button
        onClick={() => { onRenameGroup(); onClose(); }}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
      >
        <FontAwesomeIcon icon={faPen} className="mr-2 fa-fw" /> Rename group
      </button>
      <button
        onClick={() => { onRemoveGroup(); onClose(); }}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
      >
        <FontAwesomeIcon icon={faTrash} className="mr-2 fa-fw" /> Delete group
      </button>
      <button
        onClick={() => { onUngroupLists(); onClose(); }}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left text-sm"
      >
        <FontAwesomeIcon icon={faList} className="mr-2 fa-fw" /> Ungroup lists
      </button>
    </div>
  );
};

// --- Main Dashboard Page Component ---
export function DashboardPage() {
  // Initialize isSidebarOpen based on screen size for initial render
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [showDropdown, setShowDropdown] = useState(false); // For main content area dropdown
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);
  const [isCompletedSectionExpanded, setIsCompletedSectionExpanded] = useState(true);
  const [showNewListModal, setShowNewListModal] = useState(false);
  const [showNewGroupModal, setShowNewGroupModal] = useState(false);
  const [showRenameGroupModal, setShowRenameGroupModal] = useState(false);
  const [currentGroupToRename, setCurrentGroupToRename] = useState(null);
  const [showRenameListModal, setShowRenameListModal] = useState(false);
  const [currentListToRename, setCurrentListToRename] = useState(null);
  const [showSelectListModal, setShowSelectListModal] = useState(false);
  const [targetGroupIdForList, setTargetGroupIdForList] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // New state for scroll effect

  // NEW: Search states
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef(null); // Ref for search input

  const mainContentRef = useRef(null); // Ref for the scrollable main content area
  const dropdownRef = useRef(null); // For main content area dropdown
  const menuButtonRef = useRef(null); // For main content area dropdown button
  const [activeGroupDropdown, setActiveGroupDropdown] = useState(null); // For group dropdowns

  const [lists, setLists] = useState([
    { id: 'myDay', name: 'My Day', icon: faSun, isDefault: true },
    { id: 'important', name: 'Important', icon: faStarSolid, isDefault: true },
    { id: 'planned', name: 'Planned', icon: faCalendarAlt, isDefault: true },
    { id: 'assignedToMe', name: 'Assigned to me', icon: faUserFriends, isDefault: true },
    { id: 'flaggedEmail', name: 'Flagged email', icon: faFlag, isDefault: true },
    { id: 'tasks', name: 'Tasks', icon: faClipboard, isDefault: true },
  ]);

  const [groups, setGroups] = useState([
    { id: 'untitledGroup', name: 'Untitled group', isExpanded: true, lists: [{ id: 'work', name: 'work', icon: faList, isDefault: false }] }
  ]);

  const [activeListId, setActiveListId] = useState('myDay');
  const [allTasks, setAllTasks] = useState([
    { id: '1', text: 'buy a lambo on monday', completed: false, starred: true, date: new Date('2025-06-09'), listId: 'myDay' },
    { id: '2', text: 'Pay utilities bill by Friday 6pm', completed: false, starred: false, date: new Date('2025-06-13'), listId: 'myDay' },
    { id: '3', text: 'Call mom', completed: true, starred: false, date: new Date('2025-06-05'), listId: 'myDay' },
    { id: '4', text: 'Finish report by EOD', completed: true, starred: false, date: new Date('2025-06-04'), listId: 'myDay' },
    { id: '5', text: 'Prepare for meeting', completed: false, starred: false, date: new Date('2025-06-10'), listId: 'important' },
    { id: '6', text: 'Schedule dental appointment', completed: false, starred: false, date: new Date('2025-06-15'), listId: 'planned' },
    { id: '7', text: 'Review team report', completed: false, starred: false, date: new Date('2025-06-11'), listId: 'assignedToMe' },
    { id: '8', text: 'Respond to urgent email', completed: false, starred: true, date: new Date('2025-06-07'), listId: 'flaggedEmail' },
    { id: '9', text: 'Clean the house', completed: true, starred: false, date: new Date('2025-06-06'), listId: 'tasks' },
    { id: '10', text: 'Work on project alpha', completed: false, starred: false, date: new Date('2025-06-12'), listId: 'work' },
  ]);

  // Handle sidebar visibility only for small screens
  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  // Close sidebar on small screens after clicking a list item
  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  // Adjust sidebar state on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true); // Always open on large screens
      } else {
        setIsSidebarOpen(false); // Default to closed on small screens if it's currently open (on small screen context)
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  const toggleDropdown = () => {
    setActiveGroupDropdown(null);
    setShowDropdown(!showDropdown);
  };

  const handleToggleCompletedTasks = () => {
    setShowCompletedTasks(!showCompletedTasks);
    if (showCompletedTasks) {
      setIsCompletedSectionExpanded(false);
    } else {
      setIsCompletedSectionExpanded(true);
    }
    setShowDropdown(false);
  };

  const toggleCompletedSection = () => {
    setIsCompletedSectionExpanded(!isCompletedSectionExpanded);
  };

  const handlePrintList = (listId) => {
    console.log(`Print list clicked for list: ${listId || activeListId}`);
    setShowDropdown(false);
  };

  const handleShareList = (listId) => {
    console.log(`Share list clicked for list: ${listId || activeListId}`);
    setShowDropdown(false);
  };

  const handleSortBy = () => {
    console.log("Sort by clicked");
    setShowDropdown(false);
  };

  const handleToggleComplete = (taskId) => {
    setAllTasks(allTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleToggleStar = (taskId) => {
    setAllTasks(prevTasks => prevTasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          starred: !task.starred,
        };
      }
      return task;
    }));
  };

  const handleAddTask = (taskText) => {
    if (taskText) {
      const newId = (allTasks.length > 0 ? Math.max(...allTasks.map(t => parseInt(t.id))) + 1 : 1).toString();
      setAllTasks([...allTasks, { id: newId, text: taskText, completed: false, starred: false, date: new Date(), listId: activeListId }]);
    }
  };

  const generateUniqueId = (name) => {
    return name.toLowerCase().replace(/\s/g, '-') + '-' + Date.now();
  };

  const handleAddNewList = (listName) => {
    if (listName) {
      const newListId = generateUniqueId(listName);
      setLists([...lists, { id: newListId, name: listName, icon: faList, isDefault: false }]);
      setShowNewListModal(false);
      setActiveListId(newListId);
      closeSidebar();
    }
  };

  const handleAddNewGroup = (groupName) => {
    if (groupName) {
      const newGroupId = generateUniqueId(groupName);
      setGroups([...groups, { id: newGroupId, name: groupName, isExpanded: true, lists: [] }]);
      setShowNewGroupModal(false);
    }
  };

  const handleListClick = (listId) => {
    setActiveListId(listId);
    closeSidebar();
    setSearchTerm(''); // Clear search when navigating to a list
    setIsSearching(false); // Exit search mode
  };

  // Memoized findListById
  const findListById = useCallback((id) => {
    let list = lists.find(l => l.id === id);
    if (!list) {
      for (const group of groups) {
        const foundList = group.lists.find(l => l.id === id);
        if (foundList) {
          return { list: foundList, groupId: group.id };
        }
      }
    }
    return { list, groupId: null };
  }, [lists, groups]); // Dependencies for findListById: lists and groups

  const isUserCreatedList = (listId) => {
    const { list } = findListById(listId);
    return list && !list.isDefault;
  };

  const confirmRenameList = () => {
    const { list: listToRename } = findListById(activeListId);
    if (listToRename && !listToRename.isDefault) {
      setCurrentListToRename(listToRename);
      setShowRenameListModal(true);
      setShowDropdown(false);
    }
  };

  const handleRenameList = (listId, newName) => {
    if (!newName) return;
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === listId ? { ...list, name: newName } : list
      )
    );
    setGroups(prevGroups => prevGroups.map(group => ({
      ...group,
      lists: group.lists.map(list =>
        list.id === listId ? { ...list, name: newName } : list
      )
    })));
    setShowRenameListModal(false);
    setCurrentListToRename(null);
  };

  const handleDeleteList = () => {
    const { list: listToDelete } = findListById(activeListId);
    if (listToDelete && !listToDelete.isDefault) {
      if (window.confirm(`Are you sure you want to delete the list "${listToDelete.name}"? All tasks in it will be deleted.`)) {
        setAllTasks(prevTasks => prevTasks.filter(task => task.listId !== activeListId));
        setLists(prevLists => prevLists.filter(list => list.id !== activeListId));
        setGroups(prevGroups => prevGroups.map(group => ({
          ...group,
          lists: group.lists.filter(list => list.id !== activeListId)
        })));

        if (activeListId === listToDelete.id) {
          setActiveListId('myDay');
        }
        setShowDropdown(false);
      }
    }
  };

  const handleDuplicateList = () => {
    const { list: listToDuplicate, groupId: parentGroupId } = findListById(activeListId);

    if (!listToDuplicate || listToDuplicate.isDefault) return;

    let baseName = listToDuplicate.name;
    const match = baseName.match(/^(.*?)(?:-\d+)*$/);
    if (match && match[1]) {
        baseName = match[1];
    }

    let nextNumber = 1;
    const allListNames = [...lists.map(l => l.name), ...groups.flatMap(g => g.lists.map(l => l.name))];
    const regex = new RegExp(`^${baseName}(?:-(\\d+))*$`);

    let maxExistingNumber = 0;
    allListNames.forEach(name => {
        const numMatch = name.match(regex);
        if (numMatch) {
            const parts = name.split('-');
            const lastPart = parts[parts.length - 1];
            const currentNum = parseInt(lastPart, 10);
            if (!isNaN(currentNum) && currentNum > maxExistingNumber) {
                maxExistingNumber = currentNum;
            }
        }
    });

    nextNumber = maxExistingNumber + 1;

    const newListName = `${baseName}-${nextNumber}`;
    const newId = generateUniqueId(newListName);

    const duplicatedList = { ...listToDuplicate, id: newId, name: newListName, isDefault: false };

    const duplicatedTasks = allTasks
      .filter(task => task.listId === listToDuplicate.id)
      .map(task => ({
        ...task,
        id: generateUniqueId(task.text + Math.random()),
        listId: newId,
        completed: false,
      }));

    setAllTasks(prevTasks => [...prevTasks, ...duplicatedTasks]);

    if (parentGroupId) {
      setGroups(prevGroups => prevGroups.map(group =>
        group.id === parentGroupId
          ? { ...group, lists: [...group.lists, duplicatedList] }
          : group
      ));
    } else {
      setLists(prevLists => [...prevLists, duplicatedList]);
    }

    setActiveListId(newId);
    setShowDropdown(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (activeGroupDropdown && !event.target.closest('.group-dropdown-button') && !event.target.closest('.group-dropdown-menu')) {
        setActiveGroupDropdown(null);
      }

      // Handle click outside search input
      // Only set isSearching to false if search term is empty AND clicked outside
      if (searchInputRef.current && !searchInputRef.current.contains(event.target) && searchTerm === '') {
        setIsSearching(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeGroupDropdown, searchTerm]);

  // Scroll detection useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (mainContentRef.current) {
        const scrollTop = mainContentRef.current.scrollTop;
        // Adjust this threshold as needed based on your banner's height
        setIsScrolled(scrollTop > 100); // If scrolled more than 100px, set isScrolled to true
      }
    };

    const currentRef = mainContentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const currentListTasks = activeListId === 'important'
    ? allTasks.filter(task => task.starred)
    : activeListId === 'planned'
    ? allTasks
    : allTasks.filter(task => task.listId === activeListId);

  const incompleteTasks = currentListTasks.filter(task => !task.completed);
  const completedTasks = currentListTasks.filter(task => task.completed);

  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  const activeListName = lists.find(list => list.id === activeListId)?.name ||
                         groups.flatMap(group => group.lists).find(list => list.id === activeListId)?.name ||
                         'My Day';

  // Group Management Functions
  const toggleGroupExpand = (groupId) => {
    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === groupId ? { ...group, isExpanded: !group.isExpanded } : group
      )
    );
  };

  const handleGroupDropdownToggle = (groupId, event) => {
    event.stopPropagation();
    setShowDropdown(false);
    setActiveGroupDropdown(activeGroupDropdown === groupId ? null : groupId);
  };

  const handleRenameGroup = (groupId, newName) => {
    if (!newName) return;
    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === groupId ? { ...group, name: newName } : group
      )
    );
    setShowRenameGroupModal(false);
    setCurrentGroupToRename(null);
  };

  const confirmRenameGroup = (groupId) => {
    const groupToRename = groups.find(g => g.id === groupId);
    if (groupToRename) {
      setCurrentGroupToRename(groupToRename);
      setShowRenameGroupModal(true);
    }
  };

  const handleRemoveGroup = (groupId) => {
    if (window.confirm("Are you sure you want to delete this group? All lists within this group will also be deleted.")) {
      setGroups(prevGroups => {
        const groupToDelete = prevGroups.find(g => g.id === groupId);
        if (groupToDelete) {
          const listIdsToRemove = groupToDelete.lists.map(list => list.id);
          setAllTasks(prevTasks => prevTasks.filter(task => !listIdsToRemove.includes(task.listId)));
          setLists(prevLists => prevLists.filter(list => !listIdsToRemove.includes(list.id)));
        }
        return prevGroups.filter(group => group.id !== groupId);
      });
      if (groups.find(g => g.id === groupId)?.lists.some(list => list.id === activeListId)) {
        setActiveListId('myDay');
      }
    }
  };

  const handleUngroupLists = (groupId) => {
    setGroups(prevGroups => {
      const targetGroup = prevGroups.find(g => g.id === groupId);
      if (targetGroup) {
        setLists(prevLists => [...prevLists, ...targetGroup.lists.map(list => ({ ...list, isDefault: false }))]);
        return prevGroups.filter(group => group.id !== groupId);
      }
      return prevGroups;
    });
  };

  const getAvailableListsForGroup = () => {
    const allListsInGroups = groups.flatMap(group => group.lists.map(list => list.id));
    return lists.filter(list => !list.isDefault && !allListsInGroups.includes(list.id));
  };

  const handleAddListToGroup = (listIdToAdd) => {
    if (!targetGroupIdForList) return;

    const listToMove = lists.find(list => list.id === listIdToAdd);
    if (!listToMove) return;

    setLists(prevLists => prevLists.filter(list => list.id !== listIdToAdd));
    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === targetGroupIdForList
          ? { ...group, lists: [...group.lists, listToMove] }
          : group
      )
    );
    setShowSelectListModal(false);
    setTargetGroupIdForList(null);
    closeSidebar();
  };

  // Drag and Drop handlers
  const handleDragStart = (e, listId) => {
    const list = lists.find(l => l.id === listId) || groups.flatMap(g => g.lists).find(l => l.id === listId);
    if (list && list.isDefault) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('listId', listId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, groupId) => {
    e.preventDefault();
    const listId = e.dataTransfer.getData('listId');

    let listToMove = lists.find(list => list.id === listId);
    let sourceGroupId = null;

    if (!listToMove) {
        groups.forEach(group => {
            const foundInGroup = group.lists.find(list => list.id === listId);
            if (foundInGroup) {
                listToMove = foundInGroup;
                sourceGroupId = group.id;
            }
        });
    }

    if (!listToMove || listToMove.isDefault) {
      console.warn("Cannot drag default lists.");
      return;
    }

    if (sourceGroupId === groupId) {
      return;
    }

    if (sourceGroupId) {
        setGroups(prevGroups =>
            prevGroups.map(group => {
                if (group.id === sourceGroupId) {
                    return { ...group, lists: group.lists.filter(list => list.id !== listId) };
                } else if (group.id === groupId) {
                    return { ...group, lists: [...group.lists, listToMove] };
                }
                return group;
            })
        );
    } else {
        setLists(prevLists => prevLists.filter(list => list.id !== listId));
        setGroups(prevGroups =>
            prevGroups.map(group =>
                group.id === groupId
                    ? { ...group, lists: [...group.lists, listToMove] }
                    : group
            )
        );
    }
  };

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const foundResults = [];

    // Search tasks
    allTasks.forEach(task => {
      if (task.text.toLowerCase().includes(lowerCaseSearchTerm)) {
        const parentList = findListById(task.listId); // findListById is now memoized
        foundResults.push({
          type: 'task',
          id: task.id,
          text: task.text,
          listName: parentList.list?.name || 'Unknown List',
          listId: task.listId, // Keep listId to navigate to the list
        });
      }
    });

    // Search lists (currently includes all)
    const allAvailableLists = [...lists, ...groups.flatMap(group => group.lists)];
    allAvailableLists.forEach(list => {
        if (list.name.toLowerCase().includes(lowerCaseSearchTerm)) {
            foundResults.push({
                type: 'list',
                id: list.id,
                name: list.name,
            });
        }
    });

    // Remove duplicates if a list name matches a task within that list
    const uniqueResults = [];
    const seenIds = new Set();
    foundResults.forEach(result => {
        const resultId = result.type === 'task' ? `task-${result.id}` : `list-${result.id}`;
        if (!seenIds.has(resultId)) {
            uniqueResults.push(result);
            seenIds.add(resultId);
        }
    });

    setSearchResults(uniqueResults);
  }, [searchTerm, allTasks, lists, groups, findListById]); // `findListById` is a dependency now, but it's memoized

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearching(true); // Always set to true when typing
  };

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    // Only turn off searching mode if the search term is empty
    if (searchTerm.trim() === '') {
      setIsSearching(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans antialiased"> {/* Main container for flex layout */}
      {/* Sidebar Overlay for small screens */}
      {isSidebarOpen && window.innerWidth < 768 && ( // Only show overlay on small screens when sidebar is open
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Modals */}
      <InputModal show={showNewListModal} title="New List" placeholder="Enter list name" onClose={() => setShowNewListModal(false)} onSubmit={handleAddNewList} />
      <InputModal show={showNewGroupModal} title="New Group" placeholder="Enter group name" onClose={() => setShowNewGroupModal(false)} onSubmit={handleAddNewGroup} />
      <InputModal show={showRenameGroupModal} title="Rename Group" placeholder="Enter new group name" defaultValue={currentGroupToRename?.name || ''} onClose={() => { setShowRenameGroupModal(false); setCurrentGroupToRename(null); }} onSubmit={(newName) => handleRenameGroup(currentGroupToRename.id, newName)} />
      <InputModal show={showRenameListModal} title="Rename List" placeholder="Enter new list name" defaultValue={currentListToRename?.name || ''} onClose={() => { setShowRenameListModal(false); setCurrentListToRename(null); }} onSubmit={(newName) => handleRenameList(currentListToRename.id, newName)} />
      <SelectListModal show={showSelectListModal} onClose={() => { setShowSelectListModal(false); setTargetGroupIdForList(null); }} onSelectList={handleAddListToGroup} availableLists={getAvailableListsForGroup()} />

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0
          bg-gray-800 text-gray-100
          transition-transform duration-300 ease-in-out
          flex flex-col z-30 shadow-lg overflow-hidden
          ${isSidebarOpen
            ? 'w-full translate-x-0' // For small screens, full width
            : 'w-0 -translate-x-full' // Collapsed state for small screens (w-0 to hide content entirely)
          }
          md:w-[28%] md:translate-x-0 md:relative // Fixed width and always visible on md+, use relative to allow main to take remaining space
        `}
      >
        {/* Close button for mobile */}
        <div className="flex justify-end p-4 md:hidden">
          <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTimes} className="text-base" />
          </button>
        </div>

        {/* User Profile */}
        <div className="p-6 flex items-center border-b border-gray-700 overflow-hidden"> {/* Added overflow-hidden */}
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-3">
            GC
          </div>
          {/* Only display profile info text if sidebar is "open" on small screen, always on large screen */}
          {(isSidebarOpen || window.innerWidth >= 768) && (
            <div>
              <p className="text-white font-semibold whitespace-nowrap">granville christopher</p> {/* Prevent wrapping */}
              <p className="text-gray-400 text-sm whitespace-nowrap">granvillechristopher@outlook.com</p> {/* Prevent wrapping */}
            </div>
          )}
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-700">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            {/* Always display search input */}
            <input
              ref={searchInputRef} // Attach ref here
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchInputChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </div>
        </div>

        {/* Search Results Display (Mobile Specific - hidden on md+) */}
        {isSearching && searchTerm.trim() !== '' && window.innerWidth < 768 && ( // Only for small screens when searching
          <div className="flex-grow p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 250px)' }}>
            <h3 className="text-gray-400 text-xs uppercase font-semibold mb-2">Search Results</h3>
            {searchResults.length > 0 ? (
              searchResults.map(result => (
                <Link
                  key={result.type === 'task' ? `task-${result.id}` : `list-${result.id}`}
                  to="#"
                  onClick={() => {
                    if (result.type === 'list') {
                      handleListClick(result.id);
                    } else if (result.type === 'task') {
                        handleListClick(result.listId); // Go to the list that contains the task
                    }
                    setSearchTerm(''); // Clear search term after clicking a result
                  }}
                  className="flex items-center px-4 py-2 rounded-lg transition-colors duration-200 text-gray-300 hover:bg-gray-700 hover:text-white mb-1"
                >
                  <FontAwesomeIcon icon={result.type === 'task' ? faClipboard : faList} className="fa-fw mr-2 text-sm" />
                  <div>
                    {result.type === 'task' ? (
                      <>
                        <span className="block text-sm">{result.text}</span>
                        <span className="block text-xs text-gray-400">in {result.listName}</span>
                      </>
                    ) : (
                      <span className="block text-sm">{result.name}</span>
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-gray-400 text-sm italic">No results found.</p>
            )}
            <div className="h-40"></div> {/* Spacer for bottom buttons */}
          </div>
        )}

        {/* Navigation - Hidden on small screens when searching, always visible on MD+ */}
        <nav className={`p-4 space-y-2 overflow-y-auto ${isSearching && searchTerm.trim() !== '' && window.innerWidth < 768 ? 'hidden' : 'flex-grow'}`}>
          {lists.filter(list => list.isDefault).map(list => (
            <Link
              key={list.id}
              to="#"
              onClick={() => handleListClick(list.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${activeListId === list.id ? 'text-white bg-blue-600 hover:bg-blue-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              <FontAwesomeIcon icon={list.icon} className="fa-fw mr-2 text-sm" />
              {/* Always display list names and counts on large screens, or when sidebar is open on small */}
              { (isSidebarOpen || window.innerWidth >= 768) && (
                <>
                  {list.name}
                  {list.id === 'important' && (
                    <span className="ml-auto text-blue-200 text-sm">
                      {allTasks.filter(task => task.starred && !task.completed).length}
                    </span>
                  )}
                  {list.id === 'planned' && (
                    <span className="ml-auto text-blue-200 text-sm">
                      {allTasks.filter(task => !task.completed).length}
                    </span>
                  )}
                  {list.id !== 'important' && list.id !== 'planned' && (
                    <span className="ml-auto text-blue-200 text-sm">
                      {allTasks.filter(task => task.listId === list.id && !task.completed).length}
                    </span>
                  )}
                </>
              )}
            </Link>
          ))}
          {lists.some(list => list.isDefault) && (isSidebarOpen || window.innerWidth >= 768) && (
            <hr className="my-2 border-gray-700" />
          )}

          {/* User created lists (standalone) */}
          {lists.filter(list => !list.isDefault).map(list => (
            <div key={list.id} className="relative group">
              <Link
                to="#"
                onClick={() => handleListClick(list.id)}
                draggable
                onDragStart={(e) => handleDragStart(e, list.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${activeListId === list.id ? 'text-white bg-blue-600 hover:bg-blue-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
              >
                <FontAwesomeIcon icon={faList} className="fa-fw mr-2 text-sm" />
                {/* Always display list names and counts on large screens, or when sidebar is open on small */}
                {(isSidebarOpen || window.innerWidth >= 768) && (
                  <>
                    <span className="flex-grow">{list.name}</span>
                    <span className="ml-auto text-blue-200 text-sm">{allTasks.filter(task => task.listId === list.id && !task.completed).length}</span>
                  </>
                )}
              </Link>
            </div>
          ))}

          {groups.map(group => (
            <div
              key={group.id}
              className="py-2"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, group.id)}
            >
              <div className="flex items-center px-4 py-2 text-gray-500 text-xs uppercase cursor-pointer hover:bg-gray-700 hover:text-white rounded-lg group" onClick={() => toggleGroupExpand(group.id)}>
                <FontAwesomeIcon icon={group.isExpanded ? faCaretDown : faCaretRight} className="fa-fw mr-2 text-sm" />
                {/* Always display group name and count on large screens, or when sidebar is open on small */}
                {(isSidebarOpen || window.innerWidth >= 768) && (
                  <>
                    <span className="flex-grow">{group.name}</span>
                    <span className="ml-auto text-gray-400 text-xs">{group.lists.flatMap(list => allTasks.filter(task => task.listId === list.id && !task.completed)).length}</span>
                  </>
                )}
                <div className="relative ml-2">
                  <button
                    onClick={(e) => handleGroupDropdownToggle(group.id, e)}
                    className="group-dropdown-button p-1 rounded-full text-gray-400 hover:bg-gray-600 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faEllipsisV} className="text-sm" />
                  </button>
                  <GroupDropdownMenu
                    isVisible={activeGroupDropdown === group.id}
                    onClose={() => setActiveGroupDropdown(null)}
                    onRenameGroup={() => confirmRenameGroup(group.id)}
                    onRemoveGroup={() => handleRemoveGroup(group.id)}
                    onUngroupLists={() => handleUngroupLists(group.id)}
                  />
                </div>
              </div>
              {group.isExpanded && (isSidebarOpen || window.innerWidth >= 768) && (
                group.lists.length === 0 ? (
                  <div
                    className="text-center text-gray-500 text-sm py-4 cursor-pointer border border-dashed border-gray-600 rounded-md mx-4 mt-2 hover:bg-gray-700 hover:text-gray-300"
                    onClick={() => { setShowSelectListModal(true); setTargetGroupIdForList(group.id); }}
                  >
                    Drag here to add list or tap here to add list
                  </div>
                ) : (
                  group.lists.map(list => (
                    <div key={list.id} className="relative group">
                      <Link
                        to="#"
                        onClick={() => handleListClick(list.id)}
                        draggable
                        onDragStart={(e) => handleDragStart(e, list.id)}
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ml-4 ${activeListId === list.id ? 'text-white bg-blue-600 hover:bg-blue-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                      >
                        <FontAwesomeIcon icon={faList} className="fa-fw mr-2 text-sm" />
                        <span className="flex-grow">{list.name}</span>
                      </Link>
                    </div>
                  ))
                )
              )}
            </div>
          ))}
        </nav>

        {/* New List and New Group Buttons - Hidden on small screens when searching, always visible on MD+ */}
        <div className={`p-4 border-t border-gray-700 justify-between space-x-2 ${isSearching && searchTerm.trim() !== '' && window.innerWidth < 768 ? 'hidden' : 'flex'}`}>
          {(isSidebarOpen || window.innerWidth >= 768) && (
            <>
              <button
                onClick={() => setShowNewListModal(true)}
                className="flex items-center w-1/2 justify-center px-2 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 text-sm"
              >
                <FontAwesomeIcon icon={faPlus} className="fa-fw mr-1 text-sm" />
                New list
              </button>
              <button
                onClick={() => setShowNewGroupModal(true)}
                className="flex items-center w-1/2 justify-center px-2 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 text-sm"
              >
                <FontAwesomeIcon icon={faPlus} className="fa-fw mr-1 text-sm" />
                New group
              </button>
            </>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className={`
          flex flex-col bg-gray-50 overflow-hidden relative flex-1
      `}>
        {/* Unified Header/Banner */}
        <div className={`
            sticky top-0 z-10
            bg-white bg-opacity-90 backdrop-blur-sm
            shadow-sm transition-all duration-300 ease-in-out
            flex items-center
            ${isScrolled ? 'py-2 px-4 h-16' : 'py-6 px-6 h-32 md:h-40'} /* Adjusted initial height */
        `}>
            {/* Menu button (hidden on md+) */}
            <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-900 mr-4 md:hidden">
                <FontAwesomeIcon icon={faBars} className="text-base" />
            </button>

            {/* List Name */}
            <h1 className={`
                font-bold text-gray-800 flex-grow
                ${isScrolled ? 'text-xl' : 'text-3xl md:text-5xl'} /* Adjust text size based on scroll */
                transition-all duration-300 ease-in-out
            `}>
                {isSearching && searchTerm.trim() !== '' ? 'Search Results' : activeListName} {/* Change title when searching */}
            </h1>

            <div className="flex items-center">
                {/* Date (initially large in banner, shrinks/appears in header) */}
                <p className={`
                    text-gray-600
                    ${isScrolled ? 'text-sm opacity-100 visible' : 'text-lg md:text-xl opacity-100 visible'} /* Always visible initially */
                    ${isScrolled ? 'mr-4' : ''} /* Add margin when scrolled */
                    transition-all duration-300 ease-in-out
                    ${isScrolled ? '' : 'absolute bottom-3 right-6 text-xl md:text-xl'} /* Position date in banner */
                    md:static /* Ensure it behaves normally on larger screens after scroll */
                    ${isSearching && searchTerm.trim() !== '' ? 'hidden' : ''} {/* Hide date when searching */}
                `}>
                    {formattedDate}
                </p>

                {/* Ellipsis button (initially in banner, moves to header) */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        ref={menuButtonRef}
                        onClick={toggleDropdown}
                        className={`
                            p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 text-gray-600
                            ${isScrolled ? '' : 'absolute bottom-3 right-0'} /* Position button in banner */
                            md:static /* Ensure it behaves normally on larger screens after scroll */
                            ${isSearching && searchTerm.trim() !== '' ? 'hidden' : ''} {/* Hide dropdown when searching */}
                        `}
                    >
                        <FontAwesomeIcon icon={faEllipsisV} className="text-base" />
                    </button>
                    <DropdownMenu
                        isVisible={showDropdown}
                        onToggleCompletedTasks={handleToggleCompletedTasks}
                        showCompletedTasks={showCompletedTasks}
                        onPrintList={() => handlePrintList(activeListId)}
                        onShareList={() => handleShareList(activeListId)}
                        onSortBy={handleSortBy}
                        isUserCreatedList={isUserCreatedList(activeListId)}
                        onRenameList={confirmRenameList}
                        onDeleteList={handleDeleteList}
                        onDuplicateList={handleDuplicateList}
                    />
                </div>
            </div>
        </div>

        {/* Scrollable Content Area */}
        <div
          ref={mainContentRef} // Assign ref here
          className="flex-1 overflow-y-auto px-4"
          style={{ backgroundImage: `url('/todo.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {isSearching && searchTerm.trim() !== '' ? (
            // Display search results in main content area
            <div className="space-y-4 pb-20">
              <h3 className="text-gray-600 text-lg font-semibold mb-4">Results for "{searchTerm}"</h3>
              {searchResults.length > 0 ? (
                searchResults.map(result => (
                  <Link
                    key={result.type === 'task' ? `search-task-${result.id}` : `search-list-${result.id}`}
                    to="#"
                    onClick={() => {
                        if (result.type === 'list') {
                          handleListClick(result.id);
                        } else if (result.type === 'task') {
                            handleListClick(result.listId); // Navigate to the list the task belongs to
                        }
                        setSearchTerm(''); // Clear search term after clicking a result
                    }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm mb-3 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={result.type === 'task' ? faClipboard : faList} className="fa-fw mr-3 text-lg text-blue-500" />
                    <div>
                      {result.type === 'task' ? (
                        <>
                          <span className="block text-gray-800 text-base">{result.text}</span>
                          <span className="block text-xs text-gray-500">in {result.listName}</span>
                        </>
                      ) : (
                        <span className="block text-gray-800 text-base">{result.name}</span>
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-gray-600 text-base italic">No tasks or lists match your search.</p>
              )}
            </div>
          ) : (
            // Display normal tasks and completed tasks
            <>
              {/* Incomplete Task List */}
              <div className="mt-5">
                {incompleteTasks.map(task => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onToggleStar={handleToggleStar}
                  />
                ))}
              </div>

              {/* Completed Tasks Section */}
              {showCompletedTasks && completedTasks.length > 0 && (
                <div className="mt-2 pb-20">
                  <div className="flex items-center cursor-pointer mb-4 text-gray-500 hover:text-gray-900" onClick={toggleCompletedSection}>
                    {isCompletedSectionExpanded ? (
                      <FontAwesomeIcon icon={faChevronUp} className="text-sm mr-2" />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} className="text-sm mr-2" />
                    )}
                    <h3 className="text-sm md:text-xl font-semibold">
                      Completed ({completedTasks.length})
                    </h3>
                  </div>
                  {isCompletedSectionExpanded && (
                    <div className="">
                      {completedTasks.map(task => (
                        <TaskItem
                          key={task.id}
                          task={task}
                          onToggleComplete={handleToggleComplete}
                          onToggleStar={handleToggleStar}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Add a Task (Fixed to bottom) - Conditionally rendered */}
        {activeListId !== 'important' && !(isSearching && searchTerm.trim() !== '') && ( // Hide when searching
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white shadow-lg border-t border-gray-200 z-10">
            <button
              onClick={() => {
                const taskText = prompt("Enter new task:");
                if (taskText) {
                  handleAddTask(taskText);
                }
              }}
              className="flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faPlus} className="fa-fw mr-2 text-base" />
              Add a task
            </button>
          </div>
        )}
      </main>
    </div>
  );
}