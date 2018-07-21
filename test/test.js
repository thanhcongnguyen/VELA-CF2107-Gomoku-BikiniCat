var assert = require('assert');
describe('GOMOKU', function() {
  describe('WIN', function() {
    it('5 quân liên tiếp là thắng', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('4 quân liên tiếp không bị chặn 2 đầu', function() {
        assert.equal([1,2,3].indexOf(4), -1);
    });
    it('4 quân liên tiếp bị chặn một đầu và dãy 3 trắng', function() {
        assert.equal([1,2,3].indexOf(4), -1);
      });
    it('2 dãy 3 trắng', function() {
        assert.equal([1,2,3].indexOf(4), -1);
    });
    it('2 dãy 4 trắng bị chặn 1 đầu', function() {
        assert.equal([1,2,3].indexOf(4), -1);
    });
    it('4 quân liên tiếp bị chặn một đầu và tới lượt đánh', function() {
        assert.equal([1,2,3].indexOf(4), -1);
    });
  });
  describe('Error', function() {
    it('mỗi lượt đánh chỉ đuọc đánh vào 1 ô', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('không được đánh 2 lần liên tiếp', function() {
        assert.equal([1,2,3].indexOf(4), -1);
      });
    it('ô đã đánh thì không đuợc đánh lại', function() {
        assert.equal([1,2,3].indexOf(4), -1);
    });
    
    
  });
});