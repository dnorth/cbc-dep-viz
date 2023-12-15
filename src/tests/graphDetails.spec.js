import { calculateRootCount } from "../utils/graphDetails"

describe('calculateRootCount', () => {
  describe('when there are only 2 layers', () => {
    const tasks = [{ id: "1" }, { id: "2" }]
    const dependencies = [{
      "predecessor_id": "1",
      "successor_id": "2"
    }]

    const actualResult = calculateRootCount(tasks, dependencies)

    it('only nodes on the first layer should be counted as a root', () => {
      const expectedResult = 1

      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe('when there are more than 2 layers', () => {
    const tasks = [
      { "id": "1", "name": "Root Task 1" },
      { "id": "2", "name": "Root Task 2" },
      { "id": "3", "name": "Mid Layer Task 1" },
      { "id": "4", "name": "Mid Layer Task 2" },
      { "id": "5", "name": "Mid Layer Task 3" },
      { "id": "6", "name": "Leaf Task 1" },
      { "id": "7", "name": "Leaf Task 2" }
    ]
    
    const dependencies = [
      { "predecessor_id": "1", "successor_id": "3" },
      { "predecessor_id": "2", "successor_id": "3" },
      { "predecessor_id": "2", "successor_id": "4" },
      { "predecessor_id": "1", "successor_id": "5" },
      { "predecessor_id": "3", "successor_id": "6" },
      { "predecessor_id": "4", "successor_id": "6" },
      { "predecessor_id": "5", "successor_id": "7" }
    ]
    

    const actualResult = calculateRootCount(tasks, dependencies)

    it('only nodes on the first layer should be counted as a root', () => {
      const expectedResult = 2

      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe('when some tasks are neither a successor nor a predecessor', () => {
    const tasks = [
      { "id": "1", "name": "Root Task 1" },
      { "id": "2", "name": "Root Task 2" },
      { "id": "3", "name": "Mid Layer Task 1" },
      { "id": "4", "name": "Mid Layer Task 2" },
      { "id": "5", "name": "Mid Layer Task 3" },
      { "id": "6", "name": "Leaf Task 1" },
      { "id": "7", "name": "Leaf Task 2" },
      { "id": "8", "name": "Isolated Task 1" },
      { "id": "9", "name": "Isolated Task 2" },
      { "id": "10", "name": "Isolated Task 3" }
    ];
    
    
    const dependencies = [
      { "predecessor_id": "1", "successor_id": "3" },
      { "predecessor_id": "2", "successor_id": "3" },
      { "predecessor_id": "2", "successor_id": "4" },
      { "predecessor_id": "1", "successor_id": "5" },
      { "predecessor_id": "3", "successor_id": "6" },
      { "predecessor_id": "4", "successor_id": "6" },
      { "predecessor_id": "5", "successor_id": "7" }
    ]
    

    const actualResult = calculateRootCount(tasks, dependencies)

    it('ALL nodes that are not successors should be counted', () => {
      const expectedResult = 5

      expect(actualResult).toEqual(expectedResult)
    })
  })
})

describe('calculateMaxDepth', () => {
  describe('when something', () => {
    it('should do something', () => {
      expect(true).toBeTruthy()
    })
  })
})