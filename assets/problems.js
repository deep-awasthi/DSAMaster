const PROBLEMS = [
  {
    "id": "0-and-1-knapsack",
    "name": "0 and 1 Knapsack",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "3sum",
    "name": "3Sum",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/3sum/",
    "gfg_url": null
  },
  {
    "id": "4-sum",
    "name": "4 Sum",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/4sum/",
    "gfg_url": null
  },
  {
    "id": "accounts-merge",
    "name": "Accounts merge",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/accounts-merge/",
    "gfg_url": null
  },
  {
    "id": "add-two-numbers",
    "name": "Add Two Numbers",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/add-two-numbers/",
    "gfg_url": null
  },
  {
    "id": "aggressive-cows",
    "name": "Aggressive Cows",
    "category": "Binary Search",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "alien-dictionary",
    "name": "Alien Dictionary",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/alien-dictionary/",
    "gfg_url": "https://practice.geeksforgeeks.org/problems/alien-dictionary/1"
  },
  {
    "id": "allocate-minimum-number-of-pages",
    "name": "Allocate Minimum Number of Pages",
    "category": "Binary Search",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "assign-cookies",
    "name": "Assign Cookies",
    "category": "Greedy Algorithms",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/assign-cookies/",
    "gfg_url": null
  },
  {
    "id": "asteroid-collision",
    "name": "Asteroid Collision",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/asteroid-collision/",
    "gfg_url": null
  },
  {
    "id": "bst-iterator",
    "name": "BST iterator",
    "category": "Binary Trees",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/binary-search-tree-iterator/",
    "gfg_url": null
  },
  {
    "id": "balanced-binary-tree",
    "name": "Balanced Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/balanced-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "bellman-ford-algorithm",
    "name": "Bellman ford algorithm",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "best-time-to-buy-and-sell-stock",
    "name": "Best Time to Buy And Sell Stock",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "gfg_url": null
  },
  {
    "id": "best-time-to-buy-and-sell-stock-with-cooldown",
    "name": "Best Time to Buy And Sell Stock With Cooldown",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    "gfg_url": null
  },
  {
    "id": "best-time-to-buy-and-sell-stock-iv",
    "name": "Best time to buy and sell stock IV",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
    "gfg_url": null
  },
  {
    "id": "binary-search",
    "name": "Binary Search",
    "category": "Binary Search",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/binary-search/",
    "gfg_url": null
  },
  {
    "id": "binary-subarrays-with-sum",
    "name": "Binary Subarrays With Sum",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/binary-subarrays-with-sum/",
    "gfg_url": null
  },
  {
    "id": "binary-tree-level-order-traversal",
    "name": "Binary Tree Level Order Traversal",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "gfg_url": null
  },
  {
    "id": "binary-tree-maximum-path-sum",
    "name": "Binary Tree Maximum Path Sum",
    "category": "Binary Trees",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "gfg_url": null
  },
  {
    "id": "binary-tree-right-side-view",
    "name": "Binary Tree Right Side View",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "gfg_url": null
  },
  {
    "id": "bipartite-graph",
    "name": "Bipartite graph",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/is-graph-bipartite/",
    "gfg_url": null
  },
  {
    "id": "book-allocation-problem",
    "name": "Book Allocation Problem",
    "category": "Binary Search",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "bottom-view-of-bt",
    "name": "Bottom view of BT",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "boundary-traversal",
    "name": "Boundary Traversal",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/boundary-of-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "bridges-in-graph",
    "name": "Bridges in graph",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/critical-connections-in-a-network/discuss/382385/find-bridges-in-a-graph",
    "gfg_url": null
  },
  {
    "id": "burst-balloons",
    "name": "Burst Balloons",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/burst-balloons/",
    "gfg_url": null
  },
  {
    "id": "car-fleet",
    "name": "Car Fleet",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/car-fleet/",
    "gfg_url": null
  },
  {
    "id": "ceil-in-a-bst",
    "name": "Ceil in a BST",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "celebrity-problem",
    "name": "Celebrity Problem",
    "category": "Stack & Queue",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/accounts/login/?next=/problems/find-the-celebrity/",
    "gfg_url": null
  },
  {
    "id": "cheapest-flights-within-k-stops",
    "name": "Cheapest Flights Within K Stops",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "gfg_url": null
  },
  {
    "id": "check-if-ll-is-palindrome-or-not",
    "name": "Check if LL is palindrome or not",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/palindrome-linked-list/",
    "gfg_url": null
  },
  {
    "id": "children-sum-property-in-binary-tree",
    "name": "Children Sum Property in Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "climbing-stairs",
    "name": "Climbing Stairs",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/climbing-stairs/",
    "gfg_url": null
  },
  {
    "id": "clone-graph",
    "name": "Clone Graph",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/clone-graph/",
    "gfg_url": null
  },
  {
    "id": "coin-change",
    "name": "Coin Change",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/coin-change/",
    "gfg_url": null
  },
  {
    "id": "coin-change-ii",
    "name": "Coin Change II",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/coin-change-ii/",
    "gfg_url": null
  },
  {
    "id": "combination-sum",
    "name": "Combination Sum",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/combination-sum/",
    "gfg_url": null
  },
  {
    "id": "combination-sum-ii",
    "name": "Combination Sum II",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/combination-sum-ii/",
    "gfg_url": null
  },
  {
    "id": "compare-version-numbers",
    "name": "Compare version numbers",
    "category": "Strings",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/compare-version-numbers/",
    "gfg_url": null
  },
  {
    "id": "construct-bst-from-given-keys",
    "name": "Construct BST from given keys",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "gfg_url": null
  },
  {
    "id": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "name": "Construct Binary Tree From Preorder And Inorder Traversal",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "gfg_url": null
  },
  {
    "id": "construct-a-bst-from-a-preorder-traversal",
    "name": "Construct a BST from a preorder traversal",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
    "gfg_url": null
  },
  {
    "id": "construct-a-bt-from-postorder-and-inorder",
    "name": "Construct a BT from Postorder and Inorder",
    "category": "Binary Trees",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
    "gfg_url": null
  },
  {
    "id": "container-with-most-water",
    "name": "Container With Most Water",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/container-with-most-water/",
    "gfg_url": null
  },
  {
    "id": "contains-duplicate",
    "name": "Contains Duplicate",
    "category": "Arrays & Hashing",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/contains-duplicate/",
    "gfg_url": null
  },
  {
    "id": "copy-list-with-random-pointer",
    "name": "Copy List With Random Pointer",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "gfg_url": null
  },
  {
    "id": "count-good-nodes-in-binary-tree",
    "name": "Count Good Nodes In Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "count-inversions",
    "name": "Count Inversions",
    "category": "Arrays & Hashing",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "count-and-say",
    "name": "Count and say",
    "category": "Strings",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/count-and-say/",
    "gfg_url": null
  },
  {
    "id": "count-number-of-nice-subarrays",
    "name": "Count number of Nice subarrays",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/count-number-of-nice-subarrays/",
    "gfg_url": null
  },
  {
    "id": "count-subarrays-with-given-xor-k",
    "name": "Count subarrays with given xor K",
    "category": "Arrays & Hashing",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "counting-bits",
    "name": "Counting Bits",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/counting-bits/",
    "gfg_url": null
  },
  {
    "id": "course-schedule",
    "name": "Course Schedule",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/course-schedule/",
    "gfg_url": null
  },
  {
    "id": "course-schedule-ii",
    "name": "Course Schedule II",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/course-schedule-ii/",
    "gfg_url": null
  },
  {
    "id": "dfs",
    "name": "DFS",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "daily-temperatures",
    "name": "Daily Temperatures",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/daily-temperatures/",
    "gfg_url": null
  },
  {
    "id": "decode-ways",
    "name": "Decode Ways",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/decode-ways/",
    "gfg_url": null
  },
  {
    "id": "delete-node-in-a-linked-list-o-1",
    "name": "Delete Node in a Linked List O(1)",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/delete-node-in-a-linked-list/",
    "gfg_url": null
  },
  {
    "id": "delete-a-node-in-bst",
    "name": "Delete a node in BST",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/delete-node-in-a-bst/",
    "gfg_url": null
  },
  {
    "id": "design-add-and-search-words-data-structure",
    "name": "Design Add And Search Words Data Structure",
    "category": "Tries",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "gfg_url": null
  },
  {
    "id": "design-twitter",
    "name": "Design Twitter",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/design-twitter/",
    "gfg_url": null
  },
  {
    "id": "detect-squares",
    "name": "Detect Squares",
    "category": "Math & Geometry",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/detect-squares/",
    "gfg_url": null
  },
  {
    "id": "diameter-of-binary-tree",
    "name": "Diameter of Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "dijkstras-algorithm",
    "name": "Dijkstra's algorithm",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "distinct-numbers-in-each-subarray",
    "name": "Distinct Numbers in Each Subarray",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "distinct-subsequences",
    "name": "Distinct Subsequences",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/distinct-subsequences/",
    "gfg_url": null
  },
  {
    "id": "edit-distance",
    "name": "Edit Distance",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/edit-distance/",
    "gfg_url": null
  },
  {
    "id": "encode-and-decode-strings",
    "name": "Encode and Decode Strings",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/encode-and-decode-strings/",
    "gfg_url": "https://www.geeksforgeeks.org/problems/encode-and-decode-strings/"
  },
  {
    "id": "evaluate-reverse-polish-notation",
    "name": "Evaluate Reverse Polish Notation",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "gfg_url": null
  },
  {
    "id": "find-median-from-data-stream",
    "name": "Find Median From Data Stream",
    "category": "Stack & Queue",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/find-median-from-data-stream/",
    "gfg_url": null
  },
  {
    "id": "find-middle-of-linked-list",
    "name": "Find Middle of Linked List",
    "category": "Linked List",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "gfg_url": null
  },
  {
    "id": "find-minimum-in-rotated-sorted-array",
    "name": "Find Minimum In Rotated Sorted Array",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "gfg_url": null
  },
  {
    "id": "find-the-duplicate-number",
    "name": "Find The Duplicate Number",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/find-the-duplicate-number/",
    "gfg_url": null
  },
  {
    "id": "find-peak-element",
    "name": "Find peak element",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/find-peak-element/#:~:text=Find%20Peak%20Element%20%2D%20LeetCode&text=A%20peak%20element%20is%20an,to%20any%20of%20the%20peaks.",
    "gfg_url": null
  },
  {
    "id": "find-the-mst-weight",
    "name": "Find the MST weight",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "find-the-intersection-point-of-y-ll",
    "name": "Find the intersection point of Y LL",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "gfg_url": null
  },
  {
    "id": "find-the-repeating-and-missing-number",
    "name": "Find the repeating and missing number",
    "category": "Arrays & Hashing",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "find-the-starting-point-in-ll",
    "name": "Find the starting point in LL",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/linked-list-cycle-ii/",
    "gfg_url": null
  },
  {
    "id": "flatten-binary-tree-to-linked-list",
    "name": "Flatten Binary Tree to Linked List",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "gfg_url": null
  },
  {
    "id": "flattening-of-ll",
    "name": "Flattening of LL",
    "category": "Linked List",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "flood-fill-algorithm",
    "name": "Flood-fill Algorithm",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/flood-fill/",
    "gfg_url": null
  },
  {
    "id": "floor-in-a-bst",
    "name": "Floor in a BST",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "floyd-warshall-algorithm",
    "name": "Floyd Warshall Algorithm",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "fractional-knapsack",
    "name": "Fractional Knapsack",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "fruit-into-baskets",
    "name": "Fruit Into Baskets",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "gas-station",
    "name": "Gas Station",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/gas-station/",
    "gfg_url": null
  },
  {
    "id": "generate-parentheses",
    "name": "Generate Parentheses",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/generate-parentheses/",
    "gfg_url": null
  },
  {
    "id": "graph-valid-tree",
    "name": "Graph Valid Tree",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/graph-valid-tree/",
    "gfg_url": "https://practice.geeksforgeeks.org/problems/is-it-a-tree/1"
  },
  {
    "id": "group-anagrams",
    "name": "Group Anagrams",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/group-anagrams/",
    "gfg_url": null
  },
  {
    "id": "hand-of-straights",
    "name": "Hand of Straights",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/hand-of-straights/",
    "gfg_url": null
  },
  {
    "id": "happy-number",
    "name": "Happy Number",
    "category": "Math & Geometry",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/happy-number/",
    "gfg_url": null
  },
  {
    "id": "house-robber",
    "name": "House Robber",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/house-robber/",
    "gfg_url": null
  },
  {
    "id": "house-robber-ii",
    "name": "House Robber II",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/house-robber-ii/",
    "gfg_url": null
  },
  {
    "id": "implement-atoi-strstr",
    "name": "Implement ATOI/STRSTR",
    "category": "Strings",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/string-to-integer-atoi/",
    "gfg_url": null
  },
  {
    "id": "implement-max-heap",
    "name": "Implement Max Heap",
    "category": "Heaps & Priority Queues",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "implement-min-heap",
    "name": "Implement Min Heap",
    "category": "Heaps & Priority Queues",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "implement-queue-using-arrays",
    "name": "Implement Queue using Arrays",
    "category": "Stack & Queue",
    "difficulty": "Easy",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "implement-queue-using-stack",
    "name": "Implement Queue using Stack",
    "category": "Stack & Queue",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/implement-queue-using-stacks/",
    "gfg_url": null
  },
  {
    "id": "implement-stack-using-arrays",
    "name": "Implement Stack using Arrays",
    "category": "Stack & Queue",
    "difficulty": "Easy",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "implement-stack-using-queue-using-single-queue",
    "name": "Implement Stack using Queue (using single queue)",
    "category": "Stack & Queue",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/implement-stack-using-queues/",
    "gfg_url": null
  },
  {
    "id": "implement-trie-prefix-tree",
    "name": "Implement Trie Prefix Tree",
    "category": "Tries",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "gfg_url": null
  },
  {
    "id": "inorder-traversal",
    "name": "Inorder Traversal",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "gfg_url": null
  },
  {
    "id": "inorder-successor-and-predecessor-in-bst",
    "name": "Inorder successor and predecessor in BST",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/inorder-successor-in-bst/",
    "gfg_url": null
  },
  {
    "id": "insert-interval",
    "name": "Insert Interval",
    "category": "Intervals",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/insert-interval/",
    "gfg_url": null
  },
  {
    "id": "interleaving-string",
    "name": "Interleaving String",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/interleaving-string/",
    "gfg_url": null
  },
  {
    "id": "inversion-of-array-pre-req-merge-sort",
    "name": "Inversion of Array (Pre-req: Merge Sort)",
    "category": "Arrays & Hashing",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "invert-binary-tree",
    "name": "Invert Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/invert-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "job-sequencing-problem",
    "name": "Job sequencing Problem",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "jump-game",
    "name": "Jump Game",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/jump-game/",
    "gfg_url": null
  },
  {
    "id": "jump-game-ii",
    "name": "Jump Game II",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/jump-game-ii/",
    "gfg_url": null
  },
  {
    "id": "k-closest-points-to-origin",
    "name": "K Closest Points to Origin",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "gfg_url": null
  },
  {
    "id": "kmp-algorithm-or-lps-array",
    "name": "KMP Algorithm or LPS array",
    "category": "Strings",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/implement-strstr/",
    "gfg_url": null
  },
  {
    "id": "koko-eating-bananas",
    "name": "Koko Eating Bananas",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/koko-eating-bananas/",
    "gfg_url": null
  },
  {
    "id": "kth-largest-element-in-an-array",
    "name": "Kth Largest Element In An Array",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "gfg_url": null
  },
  {
    "id": "kth-largest-element-in-a-stream",
    "name": "Kth Largest Element In a Stream",
    "category": "Stack & Queue",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "gfg_url": null
  },
  {
    "id": "kth-smallest-element-in-a-bst",
    "name": "Kth Smallest Element In a Bst",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "gfg_url": null
  },
  {
    "id": "kth-element-of-2-sorted-arrays",
    "name": "Kth element of 2 sorted arrays",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "lca-in-bt",
    "name": "LCA in BT",
    "category": "Binary Trees",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "lfu-cache",
    "name": "LFU Cache",
    "category": "Stack & Queue",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/lfu-cache/",
    "gfg_url": null
  },
  {
    "id": "lru-cache",
    "name": "LRU Cache",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/lru-cache/",
    "gfg_url": null
  },
  {
    "id": "largest-rectangle-in-histogram",
    "name": "Largest Rectangle In Histogram",
    "category": "Stack & Queue",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "gfg_url": null
  },
  {
    "id": "largest-subarray-with-k-sum",
    "name": "Largest Subarray with K sum",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "last-stone-weight",
    "name": "Last Stone Weight",
    "category": "Stack & Queue",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/last-stone-weight/",
    "gfg_url": null
  },
  {
    "id": "letter-combinations-of-a-phone-number",
    "name": "Letter Combinations of a Phone Number",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    "gfg_url": null
  },
  {
    "id": "linked-list-cycle",
    "name": "Linked List Cycle",
    "category": "Linked List",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/linked-list-cycle/",
    "gfg_url": null
  },
  {
    "id": "longest-common-prefix",
    "name": "Longest Common Prefix",
    "category": "Strings",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/longest-common-prefix/",
    "gfg_url": null
  },
  {
    "id": "longest-common-subsequence",
    "name": "Longest Common Subsequence",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/longest-common-subsequence/",
    "gfg_url": null
  },
  {
    "id": "longest-consecutive-sequence",
    "name": "Longest Consecutive Sequence",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "gfg_url": null
  },
  {
    "id": "longest-increasing-path-in-a-matrix",
    "name": "Longest Increasing Path In a Matrix",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
    "gfg_url": null
  },
  {
    "id": "longest-increasing-subsequence",
    "name": "Longest Increasing Subsequence",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "gfg_url": null
  },
  {
    "id": "longest-palindromic-substring",
    "name": "Longest Palindromic Substring",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/longest-palindromic-substring/",
    "gfg_url": null
  },
  {
    "id": "longest-repeating-character-replacement",
    "name": "Longest Repeating Character Replacement",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "gfg_url": null
  },
  {
    "id": "longest-substring-with-at-most-k-distinct-characters",
    "name": "Longest Substring With At Most K Distinct Characters",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
    "gfg_url": null
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "name": "Longest Substring Without Repeating Characters",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "gfg_url": null
  },
  {
    "id": "longest-word-with-all-prefixes",
    "name": "Longest Word with All Prefixes",
    "category": "Tries",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "longest-palindromic-subsequence",
    "name": "Longest palindromic subsequence",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/longest-palindromic-subsequence/",
    "gfg_url": null
  },
  {
    "id": "lowest-common-ancestor-of-a-binary-search-tree",
    "name": "Lowest Common Ancestor of a Binary Search Tree",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "gfg_url": null
  },
  {
    "id": "m-coloring-problem",
    "name": "M Coloring Problem",
    "category": "Recursion & Backtracking",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "mst-using-kruskal-s-algo",
    "name": "MST using Kruskal\u0393\u00c7\u00d6s Algo",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "mst-using-prims-algo",
    "name": "MST using Prim's Algo",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "majority-element-i",
    "name": "Majority Element-I",
    "category": "Arrays & Hashing",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/majority-element/",
    "gfg_url": null
  },
  {
    "id": "majority-element-ii",
    "name": "Majority Element-II",
    "category": "Arrays & Hashing",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/majority-element-ii/",
    "gfg_url": null
  },
  {
    "id": "matrix-median",
    "name": "Matrix Median",
    "category": "Binary Search",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "matrix-chain-multiplication",
    "name": "Matrix chain multiplication",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "max-area-of-island",
    "name": "Max Area of Island",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/max-area-of-island/",
    "gfg_url": null
  },
  {
    "id": "max-consecutive-ones-iii",
    "name": "Max Consecutive Ones III",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "gfg_url": null
  },
  {
    "id": "maximum-consecutive-ones",
    "name": "Maximum Consecutive Ones",
    "category": "Linked List",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/max-consecutive-ones/",
    "gfg_url": null
  },
  {
    "id": "maximum-depth-of-binary-tree",
    "name": "Maximum Depth of Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "maximum-points-you-can-obtain-from-cards",
    "name": "Maximum Points You Can Obtain from Cards",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
    "gfg_url": null
  },
  {
    "id": "maximum-product-subarray",
    "name": "Maximum Product Subarray",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/maximum-product-subarray/",
    "gfg_url": null
  },
  {
    "id": "maximum-profit-in-job-scheduling",
    "name": "Maximum Profit in Job Scheduling",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "maximum-subarray",
    "name": "Maximum Subarray",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/maximum-subarray/",
    "gfg_url": null
  },
  {
    "id": "maximum-sum-combination",
    "name": "Maximum Sum Combination",
    "category": "Heaps & Priority Queues",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "maximum-sum-increasing-subsequence",
    "name": "Maximum Sum Increasing Subsequence",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "maximum-width-of-bt",
    "name": "Maximum Width of BT",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/maximum-width-of-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "maximum-xor-of-two-numbers-in-an-array",
    "name": "Maximum XOR of two numbers in an array",
    "category": "Tries",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
    "gfg_url": null
  },
  {
    "id": "maximum-xor-with-an-element-from-an-array",
    "name": "Maximum Xor with an element from an array",
    "category": "Tries",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
    "gfg_url": null
  },
  {
    "id": "maximum-of-minimums-for-every-window-size",
    "name": "Maximum of Minimums for Every Window Size",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "median-of-two-sorted-arrays",
    "name": "Median of Two Sorted Arrays",
    "category": "Binary Search",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "gfg_url": null
  },
  {
    "id": "meeting-rooms",
    "name": "Meeting Rooms",
    "category": "Intervals",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/meeting-rooms/",
    "gfg_url": "https://www.geeksforgeeks.org/problems/meeting-rooms/"
  },
  {
    "id": "meeting-rooms-ii",
    "name": "Meeting Rooms II",
    "category": "Intervals",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/meeting-rooms-ii/",
    "gfg_url": "https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"
  },
  {
    "id": "merge-intervals",
    "name": "Merge Intervals",
    "category": "Intervals",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/merge-intervals/",
    "gfg_url": null
  },
  {
    "id": "merge-k-sorted-arrays",
    "name": "Merge K Sorted Arrays",
    "category": "Heaps & Priority Queues",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "merge-k-sorted-lists",
    "name": "Merge K Sorted Lists",
    "category": "Linked List",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "gfg_url": null
  },
  {
    "id": "merge-triplets-to-form-target-triplet",
    "name": "Merge Triplets to Form Target Triplet",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    "gfg_url": null
  },
  {
    "id": "merge-two-sorted-lists",
    "name": "Merge Two Sorted Lists",
    "category": "Linked List",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "gfg_url": null
  },
  {
    "id": "merge-two-sorted-arrays-without-extra-space",
    "name": "Merge two sorted arrays without extra space",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/merge-sorted-array/",
    "gfg_url": null
  },
  {
    "id": "min-cost-climbing-stairs",
    "name": "Min Cost Climbing Stairs",
    "category": "Dynamic Programming",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "gfg_url": null
  },
  {
    "id": "min-cost-to-connect-all-points",
    "name": "Min Cost to Connect All Points",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    "gfg_url": null
  },
  {
    "id": "min-stack",
    "name": "Min Stack",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/min-stack/",
    "gfg_url": null
  },
  {
    "id": "minimize-max-distance-to-gas-station",
    "name": "Minimize Max Distance to Gas Station",
    "category": "Binary Search",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/minimize-max-distance-to-gas-station/",
    "gfg_url": null
  },
  {
    "id": "minimum-interval-to-include-each-query",
    "name": "Minimum Interval to Include Each Query",
    "category": "Intervals",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/minimum-interval-to-include-each-query/",
    "gfg_url": null
  },
  {
    "id": "minimum-window-subsequence",
    "name": "Minimum Window Subsequence",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/minimum-window-subsequence/",
    "gfg_url": null
  },
  {
    "id": "minimum-window-substring",
    "name": "Minimum Window Substring",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/minimum-window-substring/",
    "gfg_url": null
  },
  {
    "id": "minimum-insertions-to-make-string-palindrome",
    "name": "Minimum insertions to make string palindrome",
    "category": "Strings",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",
    "gfg_url": null
  },
  {
    "id": "minimum-number-of-bracket-reversals-to-make-an-expression-balanced",
    "name": "Minimum number of bracket reversals to make an expression balanced",
    "category": "Strings",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
    "gfg_url": null
  },
  {
    "id": "minimum-number-of-platforms-required-for-a-railway",
    "name": "Minimum number of platforms required for a railway",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "minimum-sum-path-in-the-matrix-count-paths-and-similar-type-do-also-backtrack-to-find-the-minimum-path",
    "name": "Minimum sum path in the matrix, (count paths and similar type do, also backtrack to find the Minimum path)",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/minimum-path-sum/",
    "gfg_url": null
  },
  {
    "id": "minimum-time-taken-to-burn-the-bt-from-a-given-node",
    "name": "Minimum time taken to burn the BT from a given Node",
    "category": "Binary Trees",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "missing-number",
    "name": "Missing Number",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/missing-number/",
    "gfg_url": null
  },
  {
    "id": "multiply-strings",
    "name": "Multiply Strings",
    "category": "Math & Geometry",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/multiply-strings/",
    "gfg_url": null
  },
  {
    "id": "n-queens",
    "name": "N Queens",
    "category": "Recursion & Backtracking",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/n-queens/",
    "gfg_url": null
  },
  {
    "id": "n-meetings-in-one-room",
    "name": "N meetings in one room",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "network-delay-time",
    "name": "Network Delay Time",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/network-delay-time/",
    "gfg_url": null
  },
  {
    "id": "next-greater-element",
    "name": "Next Greater Element",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/next-greater-element-i/",
    "gfg_url": null
  },
  {
    "id": "next-permutation",
    "name": "Next Permutation",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/next-permutation/",
    "gfg_url": null
  },
  {
    "id": "next-smaller-element",
    "name": "Next Smaller Element",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "ninjas-training",
    "name": "Ninja's training",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "non-overlapping-intervals",
    "name": "Non Overlapping Intervals",
    "category": "Intervals",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/non-overlapping-intervals/",
    "gfg_url": null
  },
  {
    "id": "number-of-1-bits",
    "name": "Number of 1 Bits",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/number-of-1-bits/",
    "gfg_url": null
  },
  {
    "id": "number-of-connected-components-in-an-undirected-graph",
    "name": "Number of Connected Components In An Undirected Graph",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "gfg_url": "https://practice.geeksforgeeks.org/problems/number-of-provinces/1"
  },
  {
    "id": "number-of-islands",
    "name": "Number of Islands",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/number-of-islands/",
    "gfg_url": null
  },
  {
    "id": "number-of-substrings-containing-all-three-characters",
    "name": "Number of Substrings Containing All Three Characters",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
    "gfg_url": null
  },
  {
    "id": "number-of-distinct-substrings-in-a-string",
    "name": "Number of distinct substrings in a string",
    "category": "Tries",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "pacific-atlantic-water-flow",
    "name": "Pacific Atlantic Water Flow",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "gfg_url": null
  },
  {
    "id": "palindrome-partitioning",
    "name": "Palindrome Partitioning",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/palindrome-partitioning/",
    "gfg_url": null
  },
  {
    "id": "palindromic-substrings",
    "name": "Palindromic Substrings",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/palindromic-substrings/",
    "gfg_url": null
  },
  {
    "id": "partition-equal-subset-sum",
    "name": "Partition Equal Subset Sum",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "gfg_url": null
  },
  {
    "id": "partition-labels",
    "name": "Partition Labels",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/partition-labels/",
    "gfg_url": null
  },
  {
    "id": "pascals-triangle-i",
    "name": "Pascal's Triangle I",
    "category": "Arrays & Hashing",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/pascals-triangle/",
    "gfg_url": null
  },
  {
    "id": "permutation-in-string",
    "name": "Permutation In String",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/permutation-in-string/",
    "gfg_url": null
  },
  {
    "id": "permutation-sequence",
    "name": "Permutation Sequence",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/permutation-sequence/",
    "gfg_url": null
  },
  {
    "id": "permutations",
    "name": "Permutations",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/permutations/",
    "gfg_url": null
  },
  {
    "id": "plus-one",
    "name": "Plus One",
    "category": "Math & Geometry",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/plus-one/",
    "gfg_url": null
  },
  {
    "id": "populating-next-right-pointers-in-each-node",
    "name": "Populating Next Right Pointers in Each Node",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    "gfg_url": null
  },
  {
    "id": "postorder-traversal",
    "name": "Postorder Traversal",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "gfg_url": null
  },
  {
    "id": "pow-x-n",
    "name": "Pow(x, n)",
    "category": "Math & Geometry",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/powx-n/",
    "gfg_url": null
  },
  {
    "id": "power-set",
    "name": "Power Set",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "preorder-traversal",
    "name": "Preorder Traversal",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "gfg_url": null
  },
  {
    "id": "print-root-to-leaf-path-in-bt",
    "name": "Print root to leaf path in BT",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "product-of-array-except-self",
    "name": "Product of Array Except Self",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/product-of-array-except-self/",
    "gfg_url": null
  },
  {
    "id": "rabin-karp-algorithm",
    "name": "Rabin Karp Algorithm",
    "category": "Strings",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/repeated-string-match/discuss/416144/Rabin-Karp-algorithm-C%2B%2B-implementation",
    "gfg_url": null
  },
  {
    "id": "rat-in-a-maze",
    "name": "Rat in a Maze",
    "category": "Recursion & Backtracking",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "reconstruct-itinerary",
    "name": "Reconstruct Itinerary",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/reconstruct-itinerary/",
    "gfg_url": null
  },
  {
    "id": "redundant-connection",
    "name": "Redundant Connection",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/redundant-connection/",
    "gfg_url": null
  },
  {
    "id": "regular-expression-matching",
    "name": "Regular Expression Matching",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/regular-expression-matching/",
    "gfg_url": null
  },
  {
    "id": "remove-nth-node-from-end-of-list",
    "name": "Remove Nth Node From End of List",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "gfg_url": null
  },
  {
    "id": "remove-duplicates-from-sorted-array",
    "name": "Remove duplicates from sorted array",
    "category": "Linked List",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/#:~:text=Input%3A%20nums%20%3D%20%5B0%2C,%2C%203%2C%20and%204%20respectively.",
    "gfg_url": null
  },
  {
    "id": "reorder-list",
    "name": "Reorder List",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/reorder-list/",
    "gfg_url": null
  },
  {
    "id": "reverse-bits",
    "name": "Reverse Bits",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/reverse-bits/",
    "gfg_url": null
  },
  {
    "id": "reverse-integer",
    "name": "Reverse Integer",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/reverse-integer/",
    "gfg_url": null
  },
  {
    "id": "reverse-linked-list",
    "name": "Reverse Linked List",
    "category": "Linked List",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/reverse-linked-list/",
    "gfg_url": null
  },
  {
    "id": "reverse-nodes-in-k-group",
    "name": "Reverse Nodes In K Group",
    "category": "Linked List",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "gfg_url": null
  },
  {
    "id": "reverse-pairs",
    "name": "Reverse Pairs",
    "category": "Arrays & Hashing",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/reverse-pairs/",
    "gfg_url": null
  },
  {
    "id": "reverse-every-word-in-a-string",
    "name": "Reverse every word in a string",
    "category": "Strings",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "gfg_url": null
  },
  {
    "id": "rod-cutting-problem",
    "name": "Rod cutting problem",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "roman-to-integer",
    "name": "Roman to Integer",
    "category": "Strings",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/roman-to-integer/",
    "gfg_url": null
  },
  {
    "id": "rotate-image",
    "name": "Rotate Image",
    "category": "Math & Geometry",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/rotate-image/",
    "gfg_url": null
  },
  {
    "id": "rotate-a-ll",
    "name": "Rotate a LL",
    "category": "Linked List",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/rotate-list/description/",
    "gfg_url": null
  },
  {
    "id": "rotting-oranges",
    "name": "Rotting Oranges",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/rotting-oranges/",
    "gfg_url": null
  },
  {
    "id": "same-tree",
    "name": "Same Tree",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/same-tree/",
    "gfg_url": null
  },
  {
    "id": "search-in-rotated-sorted-array",
    "name": "Search In Rotated Sorted Array",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "gfg_url": null
  },
  {
    "id": "search-a-2d-matrix",
    "name": "Search a 2D Matrix",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/search-a-2d-matrix/",
    "gfg_url": null
  },
  {
    "id": "search-in-bst",
    "name": "Search in BST",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    "gfg_url": null
  },
  {
    "id": "search-in-rotated-sorted-array-ii",
    "name": "Search in rotated sorted array-II",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "gfg_url": null
  },
  {
    "id": "segregate-odd-and-even-nodes-in-linked-list",
    "name": "Segregate odd and even nodes in Linked List",
    "category": "Linked List",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/odd-even-linked-list/",
    "gfg_url": null
  },
  {
    "id": "serialize-and-deserialize-binary-tree",
    "name": "Serialize And Deserialize Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "set-matrix-zeroes",
    "name": "Set Matrix Zeroes",
    "category": "Math & Geometry",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/set-matrix-zeroes/",
    "gfg_url": null
  },
  {
    "id": "single-number",
    "name": "Single Number",
    "category": "Bit Manipulation",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/single-number/",
    "gfg_url": null
  },
  {
    "id": "single-element-in-sorted-array",
    "name": "Single element in sorted array",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/single-element-in-a-sorted-array/",
    "gfg_url": null
  },
  {
    "id": "size-of-the-largest-bst-in-a-binary-tree",
    "name": "Size of the largest BST in a Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "sliding-window-maximum",
    "name": "Sliding Window Maximum",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/sliding-window-maximum/",
    "gfg_url": null
  },
  {
    "id": "sort-ll",
    "name": "Sort LL",
    "category": "Linked List",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/sort-list/",
    "gfg_url": null
  },
  {
    "id": "sort-a-stack",
    "name": "Sort a Stack",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "sort-an-array-of-0s-1s-and-2s",
    "name": "Sort an array of 0's 1's and 2's",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/sort-colors/",
    "gfg_url": null
  },
  {
    "id": "spiral-matrix",
    "name": "Spiral Matrix",
    "category": "Math & Geometry",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/spiral-matrix/",
    "gfg_url": null
  },
  {
    "id": "stock-span-problem",
    "name": "Stock span problem",
    "category": "Stack & Queue",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/online-stock-span/",
    "gfg_url": null
  },
  {
    "id": "strongly-connected-component-using-kosaraju-s-algo",
    "name": "Strongly Connected Component(using KosaRaju\u0393\u00c7\u00d6s algo)",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/discuss/766485/kosaraju-algorithm-on",
    "gfg_url": null
  },
  {
    "id": "subarrays-with-k-different-integers",
    "name": "Subarrays with K Different Integers",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    "gfg_url": null
  },
  {
    "id": "subset-sums",
    "name": "Subset Sums",
    "category": "Recursion & Backtracking",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "subset-sum-equal-to-target-dp-14",
    "name": "Subset sum equal to target (DP- 14)",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "subset-sum-equals-to-target",
    "name": "Subset sum equals to target",
    "category": "Dynamic Programming",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "subsets",
    "name": "Subsets",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/subsets/",
    "gfg_url": null
  },
  {
    "id": "subsets-ii",
    "name": "Subsets II",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/subsets-ii/",
    "gfg_url": null
  },
  {
    "id": "subtree-of-another-tree",
    "name": "Subtree of Another Tree",
    "category": "Binary Trees",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/subtree-of-another-tree/",
    "gfg_url": null
  },
  {
    "id": "sudoku-solver",
    "name": "Sudoku Solver",
    "category": "Recursion & Backtracking",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/sudoku-solver/",
    "gfg_url": null
  },
  {
    "id": "sum-of-two-integers",
    "name": "Sum of Two Integers",
    "category": "Bit Manipulation",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/sum-of-two-integers/",
    "gfg_url": null
  },
  {
    "id": "super-egg-drop",
    "name": "Super Egg Drop",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "surrounded-regions",
    "name": "Surrounded Regions",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/surrounded-regions/",
    "gfg_url": null
  },
  {
    "id": "swim-in-rising-water",
    "name": "Swim In Rising Water",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/swim-in-rising-water/",
    "gfg_url": null
  },
  {
    "id": "symmetric-binary-tree",
    "name": "Symmetric Binary Tree",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/symmetric-tree/",
    "gfg_url": null
  },
  {
    "id": "target-sum",
    "name": "Target Sum",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/target-sum/",
    "gfg_url": null
  },
  {
    "id": "task-scheduler",
    "name": "Task Scheduler",
    "category": "Stack & Queue",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/task-scheduler/",
    "gfg_url": null
  },
  {
    "id": "the-n-th-root-of-an-integer",
    "name": "The N-th root of an integer",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "time-based-key-value-store",
    "name": "Time Based Key Value Store",
    "category": "Binary Search",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/time-based-key-value-store/",
    "gfg_url": null
  },
  {
    "id": "top-k-frequent-elements",
    "name": "Top K Frequent Elements",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/top-k-frequent-elements/",
    "gfg_url": null
  },
  {
    "id": "top-view-of-bt",
    "name": "Top View of BT",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "topological-sort-bfs",
    "name": "Topological Sort BFS",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "topological-sort-dfs",
    "name": "Topological Sort DFS",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "trapping-rain-water",
    "name": "Trapping Rain Water",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/trapping-rain-water/",
    "gfg_url": null
  },
  {
    "id": "traversal-techniques",
    "name": "Traversal Techniques",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "trie-implementation-and-advanced-operations",
    "name": "Trie Implementation and Advanced Operations",
    "category": "Tries",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "two-sum",
    "name": "Two Sum",
    "category": "Arrays & Hashing",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/two-sum/",
    "gfg_url": null
  },
  {
    "id": "two-sum-ii-input-array-is-sorted",
    "name": "Two Sum II Input Array Is Sorted",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "gfg_url": null
  },
  {
    "id": "two-sum-in-bst",
    "name": "Two sum in BST",
    "category": "Binary Trees",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",
    "gfg_url": null
  },
  {
    "id": "unique-paths",
    "name": "Unique Paths",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/unique-paths/",
    "gfg_url": null
  },
  {
    "id": "valid-anagram",
    "name": "Valid Anagram",
    "category": "Arrays & Hashing",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/valid-anagram/",
    "gfg_url": null
  },
  {
    "id": "valid-palindrome",
    "name": "Valid Palindrome",
    "category": "Two Pointers & Sliding Window",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/valid-palindrome/",
    "gfg_url": null
  },
  {
    "id": "valid-parentheses",
    "name": "Valid Parentheses",
    "category": "Stack & Queue",
    "difficulty": "Easy",
    "leetcode_url": "https://leetcode.com/problems/valid-parentheses/",
    "gfg_url": null
  },
  {
    "id": "valid-parenthesis-string",
    "name": "Valid Parenthesis String",
    "category": "Greedy Algorithms",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/valid-parenthesis-string/",
    "gfg_url": null
  },
  {
    "id": "valid-sudoku",
    "name": "Valid Sudoku",
    "category": "Arrays & Hashing",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/valid-sudoku/",
    "gfg_url": null
  },
  {
    "id": "validate-binary-search-tree",
    "name": "Validate Binary Search Tree",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/validate-binary-search-tree/",
    "gfg_url": null
  },
  {
    "id": "vertical-order-traversal",
    "name": "Vertical Order Traversal",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",
    "gfg_url": null
  },
  {
    "id": "walls-and-gates",
    "name": "Walls And Gates",
    "category": "Graphs",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/walls-and-gates/",
    "gfg_url": null
  },
  {
    "id": "word-break",
    "name": "Word Break",
    "category": "Dynamic Programming",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/word-break/",
    "gfg_url": null
  },
  {
    "id": "word-ladder",
    "name": "Word Ladder",
    "category": "Graphs",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/word-ladder/",
    "gfg_url": null
  },
  {
    "id": "word-search",
    "name": "Word Search",
    "category": "Recursion & Backtracking",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/word-search/",
    "gfg_url": null
  },
  {
    "id": "word-search-ii",
    "name": "Word Search II",
    "category": "Tries",
    "difficulty": "Hard",
    "leetcode_url": "https://leetcode.com/problems/word-search-ii/",
    "gfg_url": null
  },
  {
    "id": "z-function",
    "name": "Z function",
    "category": "Strings",
    "difficulty": "Hard",
    "leetcode_url": null,
    "gfg_url": null
  },
  {
    "id": "zig-zag-or-spiral-traversal",
    "name": "Zig Zag or Spiral Traversal",
    "category": "Binary Trees",
    "difficulty": "Medium",
    "leetcode_url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "gfg_url": null
  }
]